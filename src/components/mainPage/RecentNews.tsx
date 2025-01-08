import React, { useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import GenericCard from '../common/GenericCard';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRecentNews } from '../../context/redux/slice/RecentNewsSlice';
import { AppDispatch } from '../../context/redux/store';
import GenericLoading from '../common/GenericLoading';

function RecentNews(props) {

    const dispatch = useDispatch<AppDispatch>();
    const recentNews = useSelector((state:any)=> state.recentNews);
    useEffect(()=>{
        dispatch(asyncRecentNews({}));
    },[]);

    useEffect(()=>{
        console.log("recentNews: ", recentNews)
    },[recentNews])

    const sample = [{
        title: 'Fall Adult Bible Study',
        startDate: '2024-09-28',
        endDate: '2024-12-28',
        time: '14:30',
        dayOfWeek: 'Saturday',
        recurring: true, 
        description: "Come join us for our Fall Adult Bible Study on the book of Hebrews. See how Jesus has become our High Priest. Because of his finished work on the cross we can now enter into God's presence. We meet every Saturday, 2:30pm at our church. We are using Max Lucado's book titled \"Life Lessons on Hebrews.\" The class meets weekly until Dec. 14. Hope to see you there."
    },
    {
        title: 'Fall Adult Bible Study',
        startDate: '2024-09-28',
        endDate: '2024-12-28',
        time: '14:30',
        dayOfWeek: 'Saturday',
        recurring: true, 
        description: "Come join us for our Fall Adult Bible Study on the book of Hebrews. See how Jesus has become our High Priest. Because of his finished work on the cross we can now enter into God's presence. We meet every Saturday, 2:30pm at our church. We are using Max Lucado's book titled \"Life Lessons on Hebrews.\" The class meets weekly until Dec. 14. Hope to see you there."
    },
]

    if(recentNews.loading) return <GenericLoading></GenericLoading>


    return (
       <>
        {recentNews.data && 
        
        (
        <section>
            <SectionTitle title={"Recent News"} subTitle={"Check Our Upcoming & Ongoing Event!"}/>

            <div className='boot-container'>
                <div className='grid lg:grid-cols-2 gap-5'>

                    {recentNews.data.map((obj)=>(
                        <GenericCard> 
                        <div className='my-2'>
                            <h3 className="text-2xl font-bold">{obj.title}</h3>
                            <div className='text-indigo-800 font-semibold flex flex-col items-end my-2'>
                                <p>{new Date(obj.startDate).toLocaleDateString()} ~ {new Date(obj.endDate).toLocaleDateString()}</p>
                                <p>{obj.recurring? "Every": ""} {obj.dayOfWeek}</p>
                            </div>

                            <p>{obj.description}</p>
                        </div>
                         </GenericCard>
                    ))}
                </div>
            </div>
        </section>
        )
        }
       </>
    );
}

export default RecentNews;