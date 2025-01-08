import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import axios from "axios";
import Env from '../../Env';


export const asyncEventPost = createAsyncThunk('eventPost/asyncEventPost', (_,{rejectWithValue}:any)=>{
    return axios.get(Env.api+'api/public/sunrise/events')
    .then(resp=>{
        console.log("Fetch Success", resp);
        return resp.data;
    }).catch(error=>{
        console.error("Failed to fetch data: Axios Error", error);
        return rejectWithValue("Rejected. If you want to add some default case in case of API failure, please us this action.payload");
    })

})

export const EventPostSlice = createSlice({
    name: 'eventPost',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: builder =>{
                //fetch
                builder.addCase(asyncEventPost.pending, (state, action)=>{
                    state.loading = true;
                })
                builder.addCase(asyncEventPost.fulfilled, (state, action)=>{
                    state.loading = false;
                    state.data = action.payload || [];// payload가 비면 null이 아닌 빈 배열로 null-point exception 방지
                    state.error = ''
                })
                builder.addCase(asyncEventPost.rejected, (state, action)=>{
                   
                    state.loading = false;
                    state.data = [];
                    state.error= action.payload;// rejectedWithValue로 넘긴 정보가 여기 저장
                })
    }
})