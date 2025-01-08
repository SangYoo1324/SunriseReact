import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const FooterStyles = styled.div`

    & li{
    padding-top: 4px;
    padding-bottom: 4px;
    }

`;

function Footer(props) {
    return (
        <FooterStyles className='w-full mt-24 bg-gray-800 text-gray-300 py-2 px-4'>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-6 py-3 border-b-2'>
                <div>
                <h6 className='font-bold uppercase pt-2'>Pages</h6>
                <ul>
                    <li>For Visitors</li>
                    <li>Childern & Youth</li>
                    <li>Resources</li>
                    <li>News & Activities</li>
                </ul>
                </div>
             
                <div>
                <h6 className='font-bold uppercase pt-2'>Sections</h6>
                <ul>
                    <li>Visitors Guide</li>
                    <li>Children & Youth Programs</li>
                    <li>Church Calendar</li>
                </ul>
                </div>

             <div>
             <h6 className='font-bold uppercase pt-2'>Resources</h6>
                <ul>
                    <li>Offering</li>
                    <li>Sermon Archive</li>
                    <li>Event Archive</li>
                    <li>Photo Gallery</li>
                </ul>
             </div>
            </div>

            {/* subscribe Section */}
            <div className='col-span-2 py-8 lg:pt-2'>
                <p className='font-bold uppercase text-center lg:text-start'>Subscribe to our newsletters</p>
                <p className='py-3 text-center lg:text-start'>The latest Events, articles and resources will be sent to your inbox to let you stay tuned</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter Email..'/>
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>
            {/* very bottom */}
        <div className='flex flex-col lg:flex-row items-center max-w-[1400px] px-2 py-4 mx-auto justify-between text-center text-gray-500'>
            <p className='py-4'>2024 Sunrise Christ Community Church, Media Team. All rights reserved</p>

            <div className='flex justify-between w-[70px] pt-4 text-2xl'>
                <FaFacebook size={30}/>
                <FaYoutube size={30}/>
            </div>
        </div>
        </FooterStyles>
        
    );
}

export default Footer;