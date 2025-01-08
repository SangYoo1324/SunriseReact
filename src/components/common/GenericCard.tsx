import React from 'react';
import styled, { keyframes } from 'styled-components';

const ShakingEffect = keyframes`
    0%{
    transform: translate(0px,0px) rotate(0deg);
    }
       25%{
    transform: translate(-2px,2px) rotate(-1deg);
    }
       50%{
    transform: translate(2px,-2px) rotate(1deg);
    }
       75%{
    transform: translate(-2px,2px) rotate(-1deg);
    }
       100%{
    transform: translate(0px,0px) rotate(0deg);
    }
`

const GenericCardStyle = styled.div`

  &:hover {
    animation: ${ShakingEffect} 0.5s ease-in-out;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    background: rgba(0,0,0,0.05);
  }

`;


function GenericCard({children}) {
    return (
        <GenericCardStyle className='cursor-pointer lg:grid lg:grid-cols-3 gap-2 lg:p-2 p-4 border border-gray-400 rounded-xl shadow-extra-dark transition-shadow duration-300'>
            <div className='img-wrap  m-auto lg:col-span-1'>
            <img
            className='w-[95%] h-[95%] max-h-[250px] object-contain'
            src="https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_news_hebrews4d6622fc-5797-4b94-bf0d-02074f7855e3.png" alt="" />

            </div>

            <div className='text-box lg:col-span-2 min-h-[200px]'>
                {children}
                </div>        
        </GenericCardStyle>
    );
}

export default GenericCard;