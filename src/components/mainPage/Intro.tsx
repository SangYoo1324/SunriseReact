import React, { useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import OpeningParagraph from '../common/OpeningParagraph';
import { AddLocation, CalendarMonthRounded, ContactMailRounded, DocumentScannerRounded, EditCalendarRounded, Facebook, LocationCity, PhotoSizeSelectLarge, SourceRounded, YouTube } from '@mui/icons-material';
import PastorPic from '../../assets/mainPage/pastor2019.jpg';
import Nav1 from '../../assets/mainPage/nav1.gif';
import Nav2 from '../../assets/mainPage/nav2.gif';
import Nav3 from '../../assets/mainPage/nav3.gif';
import Nav4 from '../../assets/mainPage/nav4.gif';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../context/redux/store';
import { asyncSermon } from '../../context/redux/slice/SermonSlice';
function intro(props) {

    const dispatch = useDispatch<AppDispatch>();
    const sermonState = useSelector((state:any)=>{
        console.log("Sermon State: ", state.sermon.data);
        return state.sermon.data;
    });

        useEffect(()=>{
        
            dispatch(asyncSermon());
        },[]);

    return (
        <section>
            <SectionTitle title='You will find Jesus Here!' subTitle='Hello, Welcome to Sunrise Christ Community Church!'/>

            <div className="boot-container">
            <div className='w-full m-auto lg:grid lg:grid-cols-2 gap-4 gap-y-4'>

                {/* left side  */}
                <div className='flex flex-col gap-4 mb-7'>
      
                {
                sermonState && sermonState.length>0 ? (
                    <iframe
              src={sermonState[0].iframe}
              className="mx-auto h-[400px] w-full md:w-[95%] md:h-[500px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> 
                ): (<>Loading...</>)
                }

                {/* pastor card  */}
                <div className="pastor-card lg:grid lg:grid-cols-3 gap-5 p-4 border border-gray-300 rounded-lg shadow-lg">
                    <div className='lg:col-span-1 flex justify-center'>
                    <img  className="rounded-lg shadow-md lg:max-w-[200px] max-h-[200px] m-auto" src={PastorPic} alt="" />
                    </div>

                <div className="text-box lg:p-4 p-2 lg:col-span-2">
                    <h3 className="text-lg font-bold">Pastor Jim Mozley</h3>
                    <p className='text-xs'>As God's called servant to Pastor at Sunrise Christ Community Church I want to personally invite you to come join us and share 
                        in the Light and Love of Jesus Christ, the Son of God, our Savior and Lord. It is through Him we come into the intimacy and 
                        holiness of God and find salvation and true life. When a few disciples, right after his baptism, began to follow Jesus he turned 
                        around and said, "What do you want?" They asked, "where are you staying?" "Come." Jesus replied, "and you will see." All are welcome 
                        to come and see Jesus here, and find rest for your souls(John 1:37-39; Matthew 11:28-30).</p>
                    <a className='text-blue-400' href="pastorjim@sunrisechristcc.org">pastorjim@sunrisechristcc.org</a>
                    <p className='text-red-300'>(253)-815-6925</p>
                </div>

                </div>



                </div>

                {/* Right Side  */}
                <div>
                {/* textBox */}
                <div className='textbox'>
                <OpeningParagraph firstWord={"Hello"} secondWord={"We Are"} semicolonLocation={"middle"}/>
                <p className='text-xl'>
                sending all of you who visit us here a word of encouragement. No matter where we find ourselves God is 
                there and is working all things together for your good (Rom. 8:28). In these times it is easy to be 
                anxious and fearful. Yet, we can hear Jesus say, “Peace, do not be afraid.” Our Lord knows what is 
                happening and walks with us each and every step. Jesus said, “Come to Me all who are weary and heavy 
                laden (burdened) and I will give you rest. Take My yoke upon you, and learn from Me; for I am gentle and 
                humble in heart, and you will find rest for your souls”-Matthew 11:28-29. Please join us every Sunday for 
                worship at 10 am as we lift up Christ together. Also you will find us on Youtube at "SunriseChrist Community Church" 
                God gives us enough for today and will lead us through the wilderness to safety. Proclaim daily Psalm 91:1-7. Peace 
                of Christ be with you.
                </p>
                <div className='flex justify-end gap-2 text-3xl my-2'>
                    <span className='text-red-400'>Check also with:</span>
                    <a href="https://www.youtube.com/@SunriseChristCommunityChurch"><YouTube sx={{fontSize: "2.5rem", color: "red"}}/></a>
                    <a href="/"><Facebook sx={{fontSize: "2.5rem", color: " #1877F2"}}/></a>
                </div>
                </div>

                {/* nav-cards  */}
                <div className='grid grid-cols-2 lg:gap-2 gap-1 lg:px-2 py-8'>

                {/* card1 */}
                <div className='overflow-hidden hover:shadow-extra-dark'>
                <div className='bg-center bg-cover rounded-lg flex justify-between items-center px-5 py-8 text-gray-100
                transform transition-transform duration-200 hover:scale-105 cursor-pointer' style={{backgroundImage: `url(${Nav1})`}}>
                    <h5>Location</h5>
                   <AddLocation/>
                </div>
                </div>
                {/* card2 */}
                <div className='overflow-hidden hover:shadow-extra-dark'>
                <div className='bg-center bg-cover rounded-lg flex justify-between items-center px-5 py-8 text-gray-100
                transform transition-transform duration-200 hover:scale-105 cursor-pointer' style={{backgroundImage: `url(${Nav2})`}}>
                    <h5 className='lg:text-base text-xs'>News & Events</h5>
                    <EditCalendarRounded/>
                </div>  
                </div>  
                {/* card3 */}
                <div className='overflow-hidden hover:shadow-extra-dark'>
                <div className='bg-center bg-cover rounded-lg flex justify-between items-center px-5 py-8 text-gray-100
                transform transition-transform duration-200 hover:scale-105 cursor-pointer' style={{backgroundImage: `url(${Nav3})`}}>
                    <h5>Sermons</h5>
                    <DocumentScannerRounded/>
                </div> 
                </div>        
                {/* card4 */}
                <div className='overflow-hidden hover:shadow-extra-dark'>
                <div className='bg-center bg-cover rounded-lg flex justify-between items-center px-5 py-8 text-gray-100
                transform transition-transform duration-200 hover:scale-105 cursor-pointer' style={{backgroundImage: `url(${Nav4})`}}>
                    <h5>Resources</h5>
                    <SourceRounded/>
                </div>  
                </div>       
                {/* card5 */}
                <div className='overflow-hidden hover:shadow-extra-dark'>
                <div className='bg-center bg-cover rounded-lg flex justify-between items-center px-5 py-8 text-gray-100
                transform transition-transform duration-200 hover:scale-105 cursor-pointer' style={{backgroundImage: `url(${Nav1})`}}>
                    <h5>Photos</h5>
                    <PhotoSizeSelectLarge/>
                </div>
                </div>
                {/* card6 */}
                <div className='overflow-hidden hover:shadow-extra-dark'>
                <div className='bg-center bg-cover rounded-lg flex justify-between items-center px-5 py-8 text-gray-100
                transform transition-transform duration-200 hover:scale-105 cursor-pointer hover:shadow-extra-dark' style={{backgroundImage: `url(${Nav2})`}}>
                    <h5>Contact</h5>
                    <ContactMailRounded/>
                </div>
                </div>

                </div>

                </div>


            </div>
            </div>

        </section>
    );
}

export default intro;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
