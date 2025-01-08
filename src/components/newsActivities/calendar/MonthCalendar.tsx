import React, { useEffect, useState } from 'react';
import { getMonthMatrix } from '../../../util';
import dayjs from 'dayjs';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from '@mui/icons-material';
import MonthMatrix from './MonthMatrix';
import SectionTitle from '../../common/SectionTitle';
import styled from 'styled-components';
import Bg from '../../../assets/news/calendar_board.jpg';

const MonthCalendarStyle = styled.div`
    
    .wrap{
    background-image: url(${Bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: relative;    
    }


    .wrap::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.3); /* Slight white overlay */
       pointer-events: none; /* Allow clicks to pass through */
    }
`

function MonthCalendar(props) {
    const [selectedMonthIdx, setSelectedMonthIdx] = useState(dayjs().month())
    const [currentMonthMatrix, setCurrentMonthMatrix] = useState([]);



    useEffect(() => {
        setCurrentMonthMatrix(getMonthMatrix(selectedMonthIdx));

        console.log("current month index is..", selectedMonthIdx);
    }, [selectedMonthIdx]);

    useEffect(() => {
        console.log("current month matrix is..", currentMonthMatrix);
    }, [currentMonthMatrix]);



    return (
        <section>
            <SectionTitle title={'Sunrise Calendar'} subTitle={'Check what\'s happening at Sunrise CC!'} />
            <MonthCalendarStyle className='p-1 lg:p-7'>
                
                <div className='wrap'>

                <div className="control-panel flex items-center justify-between md:p-4 p-2 bg-gray-100 rounded-md shadow-md">
                    {/* Today Button */}
                    <button
                        onClick={() => setSelectedMonthIdx(dayjs().month())}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-200"
                    >
                        Today
                    </button>

                    {/* Selected Month Display */}
                    <div className="text-xl font-bold text-gray-800">
                        {dayjs(new Date(dayjs().year(), selectedMonthIdx)).format("MMMM YYYY")}
                    </div>
                    {/* Month Navigation */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSelectedMonthIdx(selectedMonthIdx - 1)}
                            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-200"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={() => setSelectedMonthIdx(selectedMonthIdx + 1)}
                            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition duration-200"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                </div>

                <div className='month-matrix flex flex-1 flex-col min-h-screen/2 overflow-auto'>
                    <MonthMatrix monthIndex={selectedMonthIdx} monthMatrix={currentMonthMatrix} />
                </div>


                </div>

         

            </MonthCalendarStyle>

        </section>
    );
}

export default MonthCalendar;