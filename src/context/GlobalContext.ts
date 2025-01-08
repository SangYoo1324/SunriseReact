import React from 'react';
import { PhotoEvent } from '../interface/PhotoEvent';
import dayjs, { Dayjs } from 'dayjs';
import { EventPost } from '../interface/EventPost';

interface GlobalContextType {
  photoEventList: PhotoEvent[];
  setPhotoEventList: React.Dispatch<React.SetStateAction<PhotoEvent[]>>;
  selectedDay: Dayjs,
  setSelectedDay: React.Dispatch<React.SetStateAction<Dayjs>>;
  showCalendarModal: boolean,
  setShowCalendarModal: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean,
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  eventPosts: EventPost[];
  setEventPosts: React.Dispatch<React.SetStateAction<EventPost[]>>;
  selectedEvent: EventPost
  setSelectedEvent: React.Dispatch<React.SetStateAction<EventPost>>;
}

const GlobalContext = React.createContext<GlobalContextType>({
  photoEventList: [],
  setPhotoEventList: () => {},
  selectedDay: dayjs(),
  setSelectedDay: ()=>{},
  showCalendarModal : false,
  setShowCalendarModal: ()=>{},
  isAdmin : false,
  setIsAdmin: ()=>{},
  eventPosts: [],
  setEventPosts: ()=>{},
  selectedEvent: null,
  setSelectedEvent: ()=>{}
});

export default GlobalContext;