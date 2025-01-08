import React, { useContext, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';
import MonthCalendar from '../components/newsActivities/calendar/MonthCalendar';
import CalendarModal from '../components/newsActivities/calendar/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../context/redux/store';
import { asyncEventPost } from '../context/redux/slice/EventPostSlice';
import GlobalContext from '../context/GlobalContext';
import SermonList from '../components/newsActivities/sermonArchive/SermonList';

function News(props) {
    const {showCalendarModal, setEventPosts} = useContext(GlobalContext);
    const dispatch = useDispatch<AppDispatch>();
    const eventPosts = useSelector((state:any)=>{
        return state.eventPost;
    })

    useEffect(()=>{
        dispatch(asyncEventPost());
    },[]);

    useEffect(()=>{
        console.log("eventPosts: ",eventPosts);
        setEventPosts(eventPosts.data);
    },[eventPosts]);

    return (
        <div>
               <PageTitle title={'News & Activites'} subTitle={'Stay Tuned for upcoming events & servicies!'}/>
               <MonthCalendar/>
               {showCalendarModal &&<CalendarModal/>}
               <SermonList/>
        </div>
    );
}

export default News;