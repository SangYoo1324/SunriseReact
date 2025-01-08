import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import Env from "../../Env";
import axios from "axios";


export const asyncSermon = createAsyncThunk('sermon/asyncSermon',(_,{rejectWithValue}:any)=>{
    return axios.get(Env.api+'api/public/sunrise/sermons')
    .then(resp=>{
        console.log("Fetch Success (Sermons)", resp);
         // 최신꺼가 앞으로 가게 내림차순 정렬
        resp.data.sort((a:any,b:any)=>new Date(b.date).getTime()-new Date(a.date).getTime());
        return resp.data;
    }).catch(error=>{
        console.log("Failed to fetch data: Axios Error (Sermons)", error);
        return rejectWithValue("Rejected. If you want to add some default case in case of API failure, please us this action.payload");// action.payload 에 전달
    })
})

export const postSermon = createAsyncThunk('sermon/postSermon', (data:any,{rejectWithValue}:any)=>{

    return axios.post(Env.api+'api/public/sunrise/sermons',data)
    .then(resp=>{
        console.log("Post Success (Sermons)", resp);
        return resp.data;
    })
    .catch(error=>{
        return rejectWithValue("Rejected. If you want to add some default case in case of API failure, please us this action.payload");
    })
});

export const SermonSlice = createSlice({
    name: 'sermon',
    initialState:{
        data: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: builder =>{
                    //fetch
                    builder.addCase(asyncSermon.pending, (state, action)=>{
                        state.loading = true;
                    })
                    builder.addCase(asyncSermon.fulfilled, (state, action)=>{
                        state.loading = false;
                        state.data = action.payload || [];// payload가 비면 null이 아닌 빈 배열로 null-point exception 방지
                        state.error = ''
                    })
                    builder.addCase(asyncSermon.rejected, (state, action)=>{
                       
                        state.loading = false;
                        state.data = [];
                        state.error= action.payload;// rejectedWithValue로 넘긴 정보가 여기 저장
                    })
    }
});