import React, { useContext } from 'react';
import Day from './Day';
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';
import { isSameDate } from '../../../util';

function MonthMatrix({monthIndex, monthMatrix}) {

    const {eventPosts} = useContext(GlobalContext);

    return (
        <div className='grid grid-cols-7 grid-rows-5 overflow-x-auto min-w-[568px]'>
            {eventPosts && monthMatrix.map((row:any, i:any)=>
            <React.Fragment key={i}>
                {
                    row.map((day:any, idx:any)=>{
                        
                        // eventPosts 에서 해당 날짜가 맞는 이벤트만 골라서 넣기
                       const dayEventPosts =  eventPosts.filter((e)=>{
                           const eventDayObj=dayjs(e.date);      
                           return  isSameDate(eventDayObj,day);
                        })

                        return (
                            <Day key={idx} day={day} rowIdx={i} dayEventPosts={dayEventPosts}/>
                        )
                    })
                }
            </React.Fragment>
            )}
        </div>
    );
}

export default MonthMatrix;