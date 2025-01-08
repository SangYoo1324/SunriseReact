import { Dayjs } from 'dayjs';
import React, { useContext } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { Diversity1 } from '@mui/icons-material';

function Day({ day, rowIdx, dayEventPosts }) {

    const {selectedDay, setSelectedDay, setShowCalendarModal, isAdmin, setSelectedEvent} = useContext(GlobalContext);

    const handleEventClick = (e:React.MouseEvent,event)=>{
        e.stopPropagation();
        console.log("handleEventClick", event)
        setShowCalendarModal(true);
        setSelectedEvent(event);
    }

    return (
        <div 
        onClick={()=>{
            if(isAdmin) 
                setShowCalendarModal(true);
            setSelectedDay(day)}}
        className={`border border-gray-200 flex flex-col relative 
        ${selectedDay.isSame(day,'day') && 
        selectedDay.isSame(day,'month') && 
        selectedDay.isSame(day,'year') ? 'bg-blue-100 text-blue-500': ''}`} >
            <header className='flex flex-col items-center'>
                {rowIdx===0 && (<p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>)}
                <p className='text-sm p-1 my-1 text-center'>{day.format("DD")}</p>
            </header>

            {/* events Inside  */}
            <div className='flex flex-1 flex-col gap-1 cursor-pointer lg:min-h-36 min-h-16 overflow-hidden'>
            {dayEventPosts.length>0 && 
            dayEventPosts.map((event)=>(<div 
            onClick={(e)=>handleEventClick(e,event)}
            className='truncate p-2 bg-amber-200 rounded-md'>
                <span className=''>{event.title}</span>
            </div>))
            }
            </div>

        </div>
    );
}

export default Day;