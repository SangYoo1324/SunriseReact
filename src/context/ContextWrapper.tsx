import React, { useState } from 'react';
import GlobalContext from './GlobalContext';
import { PhotoEvent } from '../interface/PhotoEvent';
import dayjs, { Dayjs } from 'dayjs';
import { EventPost } from '../interface/EventPost';

function ContextWrapper(props) {

    const [photoEventList, setPhotoEventList] = useState<PhotoEvent[]>([]);
    const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());
    const [showCalendarModal, setShowCalendarModal] =useState<boolean>(false);
    const [isAdmin, setIsAdmin]  = useState<boolean>(false);
    const [eventPosts, setEventPosts] = useState<EventPost[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<EventPost>(null);
    return (
        <GlobalContext.Provider value = {{
            photoEventList,
            setPhotoEventList,
            selectedDay,
            setSelectedDay,
            showCalendarModal,
            setShowCalendarModal,
            isAdmin,
            setIsAdmin,

            eventPosts,
            setEventPosts,

            selectedEvent,
            setSelectedEvent
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;