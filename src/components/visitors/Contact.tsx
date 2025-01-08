import React from 'react';
import SectionTitle from '../common/SectionTitle';
import styled from 'styled-components';
import ContactBoxBg from '../../assets/visitorsPage/holding_hands.jpg';

const ContactSectionStyles = styled.section`

    &>.boot-container>.box{
    background-image: 
     linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${ContactBoxBg});
    background-size: cover;
    background-position: center;
    }

`;


function Contact(props) {
    return (
        <ContactSectionStyles>
            <div className="boot-container">
                <SectionTitle title={"Contact Us"} subTitle={"Prayer Request & Any Inquiries"} />

                {/* actual box */}
                <div className='box flex flex-col lg:flex-row gap-10 lg:p-10 p4 rounded-xl drop-shadow-lg'>
                
                {/* Contact Info Section  */}
                <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 w-full lg:w-1/2 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Contact</h2>

                {/* Pastor Contact  */}
                <div className='flex items-center space-x-4 mb-6'>
                    <div className='bg-gray-200 p-4 rounded-full'>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
                    </div>

            <div>
            <p className="font-bold text-lg text-gray-800">Pastor</p>
            <p className="text-gray-600 text-sm lg:text-md">Tel: (253) 815-6925</p>
            <p className="text-blue-500 text-sm lg:text-md">Email: pastorjim@sunrisechristcc.org</p>
            </div>

                </div>
          {/* Pastor Contact / */}
          
          {/* Manager Contact  */}
          <div className="flex items-center space-x-4">
          <div className="bg-gray-200 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-lg text-gray-800">Office Administrator</p>
            <p className="text-gray-600">Tel: (253) 815-6925</p>
            <p className="text-blue-500">Email: office@sunrisechristcc.org</p>
          </div>
        </div>
           {/* Manager Contact / */}

                </div>
                

       {/* Send email */}
       <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold  mb-4">Leave a Message</h2>
        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block  mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block  mb-1">Category</label>
            <select
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            <option value="">Select a subject</option> {/* 기본 선택 옵션 */}
            <option value="prayer">Prayer Request</option>
            <option value="inquiry">General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="content" className="block  mb-1">Contents</label>
            <textarea
              id="content"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

                </div>

            </div>
        </ContactSectionStyles>
    );
}

export default Contact;