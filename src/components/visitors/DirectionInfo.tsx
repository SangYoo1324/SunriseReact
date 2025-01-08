import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Pic1 from '../../assets/visitorsPage/churchOverviw.jpg';
import Pic2 from '../../assets/visitorsPage/cy_2.jpg'
import Pic3 from '../../assets/visitorsPage/cy_5.jpg';
import Pic4 from '../../assets/visitorsPage/cy_7.jpg';
import Pic5 from '../../assets/visitorsPage/cy_8.jpg';
import OpeningParagraph from '../common/OpeningParagraph';
import { CheckCircle } from '@mui/icons-material';
function DirectionInfo(props) {
    return (
        <section>
            <SectionTitle title={"Ways to Come Visit Us"} subTitle={"Things to Know About Sunrise Christ CC"}></SectionTitle>
            
            <div className='boot-container'>
                <div className='lg:grid lg:grid-cols-2 gap-7'>
                <div className='left'>

                    {/* pics  */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh] mb-4'>
                <img className='row-span-3 object-cover w-full h-full p-2' src={Pic2} alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src={Pic1} alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src={Pic3} alt="" />
                <img className='row-span-3 object-cover w-full h-full p-2' src={Pic4} alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src={Pic5} alt="" />
            </div>
                    
                    {/* GoogleMap  */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10826.420238574985!2d-122.3324475!3d47.2829744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905634558a3399%3A0xfefcd956cb335da7!2sSunrise%20Christ%20Community%20Church!5e0!3m2!1sen!2sus!4v1712641465667!5m2!1sen!2sus" 
            style={{width: "100%", height: "300px"}}
           ></iframe> 

                </div>

                <div className='right mt-6 lg:mt-0'>

                <div className="addr pb-4">
                <p className='text-2xl text-gray-600'>150 S 356th Street, Federal Way WA 98003</p>
                <p className='text-2xl text-red-400'>(253)-815-6925</p>
                </div>

                    <OpeningParagraph firstWord={"At"} secondWord={"Sunrise Christ Commnity Church"} semicolonLocation={"end"}/>
                    <p className="p-4 border-l-4 border-gray-400 pl-6 text-gray-700">
            our mission is to share God’s Shining Light. That Light is our Lord and Savior Jesus Christ who said, 
            “I am the Light of the world. Whoever follows me will never walk in darkness, but will have the light of life (John 8:12).”
             When we come to faith in Jesus we are no longer slaves to sin but are now clothed in his righteousness. “So, if the Son sets 
             you free, you will be free indeed (John 8:36).”
            </p>
            <p className='text-xl text-indigo-500 my-2'>Sunday Woship starts at 10:00AM, and usually lasts about an hour.</p>
            <ul className='mt-2'>
                <li className='mb-3 flex items-start'> <CheckCircle style={{color: '#66bb6a' , marginRight: "8px"}}/>
                <span>
                Sunrise Christ CC is a Global Methodist Church, a traditional Wesleyan denomination that adheres to the historical
                     orthodox tenants of Christianity. Methodism was formed in 18th century England when an ordained Anglican priest named
                      John Wesley wished to reform the church in his native country. This calling was birthed when Wesley had a heartfelt
                       experience through the Holy Spirit in which Jesus was revealed to him personally (see John 3:3-8) at a place called
                        Aldersgate in London on May 24, 1738. Up until this time, though a trained theologian and pastor from Oxford, 
                        he had struggled with his faith being genuine. While listening to an open air exposition on the book of Romans 
                        at Aldersgate something “clicked” within his spirit and Christ became very real to him. Of this moment he later 
                        wrote “I felt I did trust in Christ, Christ alone, for salvation; and an assurance was given me that he had taken 
                        away my sin sins, even mine, and saved me from the law of sin and death.” From here a movement began in which many
                         a soul was changed forever through the saving work of Christ in their lives.
                </span>
                </li>
            
            <li className='mb-3 flex items-start'> <CheckCircle style={{color: '#66bb6a' , marginRight: "8px"}}/>
            <span>
            Please know that at Sunrise Christ CC the doors are always open for all. Join us after Sunday worship for coffee, tea and light
             refreshments. Also, come share with us in Holy Communion the first Sunday of each month; together in remembrance of being 
             redeemed from our sins through Christ finished work on the cross (John 19:30; Ephesians 1:7). Here at Sunrise we proclaim, 
             as Peter did to Jesus question, “Who do you say I am”; replying with him, “You are the Messiah (Christ), the Son of the Living 
             God (Matthew 16:16).” Follow us in our vision that God will bring to His church His sons and daughters from the east, west, north 
             and south (Isaiah 43:5-7).
            </span>
            </li>
            </ul>
                        
         

            <h5 className='text-3xl text-red-400 font-dancing-script lg:text-start text-center'>We Look Forward to Seeing You Soon!</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DirectionInfo;