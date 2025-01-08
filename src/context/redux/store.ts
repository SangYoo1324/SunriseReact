import { configureStore } from "@reduxjs/toolkit";
import { PhotoEventSlice } from "./slice/PhotoEventSlice";
import { RecentNewsSlice } from "./slice/RecentNewsSlice";
import { EventPostSlice } from "./slice/EventPostSlice";
import { SermonSlice } from "./slice/SermonSlice";

const store = configureStore({
    reducer:{
        photoEvent: PhotoEventSlice.reducer,
        recentNews: RecentNewsSlice.reducer,
        eventPost: EventPostSlice.reducer,
        sermon: SermonSlice.reducer
    }
});

export default store;

export type AppDispatch = typeof store.dispatch;