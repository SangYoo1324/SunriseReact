import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Env from "../../Env";


export const asyncRecentNews = createAsyncThunk('recentNews/asyncRecentNews',(_,{rejectWithValue}:any)=>{
    return axios.get(Env.api+'api/public/sunrise/news')
    .then(resp=>{
        console.log("Fetch Success", resp);
        return resp.data;
    }).catch(error=>{
        console.log("Failed to fetch data: Axios Error", error);
        return rejectWithValue("Rejected. If you want to add some default case in case of API failure, please us this action.payload");// action.payload 에 전달
    })
})




export const RecentNewsSlice = createSlice({
    name: 'recentNews',
    initialState:{
        data: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: builder =>{
                    //fetch
                    builder.addCase(asyncRecentNews.pending, (state, action)=>{
                        state.loading = true;
                    })
                    builder.addCase(asyncRecentNews.fulfilled, (state, action)=>{
                        state.loading = false;
                        state.data = action.payload || [];// payload가 비면 null이 아닌 빈 배열로 null-point exception 방지
                        state.error = ''
                    })
                    builder.addCase(asyncRecentNews.rejected, (state, action)=>{
                       
                        state.loading = false;
                        state.data = [];
                        state.error= action.payload;// rejectedWithValue로 넘긴 정보가 여기 저장
                    })
    }
});
