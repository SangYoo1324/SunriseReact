import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Env from "../../Env";


                                                                            // placeholder 로서 _가 필요. param(id같은거) 필요 하다면 param 넣으면 되고
export const asyncPhotoEvent = createAsyncThunk('photoEvent/asyncPhotoEvent', ( _,{rejectWithValue}:any)=>{
    return axios.get(Env.api+'api/public/sunrise/photos')
    .then(resp=>{
        console.log("Fetch Success", resp);
        return resp.data
    }).catch(error=>{
        console.error("Failed to fetch data: Axios Error", error);
        return rejectWithValue("Rejected. If you want to add some default case in case of API failure, please us this action.payload");
    })
});

export const asyncIndivPhotoEvent = createAsyncThunk('photoEvent/asyncIndivPhotoEvent',(id,{rejectWithValue}:any)=>{
    return axios.get(Env.api+'api/public/sunrise/photo/'+id)
        .then(resp=>{
            console.log("Fetch Success", resp);
            return resp.data
        }).catch(error=>{
            console.error("Failed to fetch data: Axios Error", error);
            return rejectWithValue("Rejected. If you want to add some default case in case of API failure, please us this action.payload");
        })
});

export const PhotoEventSlice = createSlice({
    name: 'photoEvent',
    initialState: {
        data: null,
        indivData: null,
        loading: false,
        error: null
    },
    reducers: {

    },

    extraReducers: builder =>{
              //fetch
              builder.addCase(asyncPhotoEvent.pending, (state, action)=>{
                state.loading = true;
            })
            builder.addCase(asyncPhotoEvent.fulfilled, (state, action)=>{
                state.loading = false;
                state.data = action.payload || [];
                state.error = ''
            })
            builder.addCase(asyncPhotoEvent.rejected, (state, action)=>{
               
                state.loading = false;
                state.data = [];
                state.error= action.payload;
            })

            //fetch by id
            builder.addCase(asyncIndivPhotoEvent.pending, (state) => {
                state.loading = true;
            });
            builder.addCase(asyncIndivPhotoEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.indivData = action.payload || null;
                state.error = null;
            });
            builder.addCase(asyncIndivPhotoEvent.rejected, (state, action) => {
                state.loading = false;
                state.indivData = null;
                state.error = action.payload;
            });   

    }
})