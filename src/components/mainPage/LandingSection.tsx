import React from 'react';
import BackgroundVideo from "../../assets/sample2 (1).mp4";
import BackgroundImage from "../../assets/church_background.jpg"
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';


const bounce = keyframes`
    0%, 100%{
    transform: translateY(0);}
    50% {
    transform: translateY(10px);}
`

const LandingSectionStyles = styled.div`
 width: 100%;
 height: 100vh;
 position: relative;
}

`

const ArrowContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .arrow{
    animation: ${bounce} 1s infinite;
    }

`;



function LandingSection(props) {
    return (
  // width >1024px: video 
  <LandingSectionStyles>
    {/* large-bg: video  */}
              {/* <video autoPlay muted loop playsInline className="background-video">
    <source src={BackgroundVideo} type="video/mp4" />
  </video> */}
  {/* small-bg:img  */}
  <img className='small-bg top-0 left-0 w-full h-screen object-cover' src={BackgroundImage} alt="" />
  
  {/* overlay */}
  <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='lg:left-[10%] lg:-translate-x-0 max-w-[1100px] m-auto absolute w-[90%] left-1/2 transfrom -translate-x-1/2'>
        <h1 className='font-bold text-4xl md:text-7xl drop-shadow-2xl'>Sunrise Christ Community Church</h1>
        <p className='max-w-[728px] drop-shadow-2xl py-2 text-xl md:text-3xl mb-4'>"Blessings to you all in the Powerful and Loving Name of Jesus"</p>
        <button className='bg-white text-black py-2 px-5 lg:text-xl font-bold'>
            <Link to="/visitors">
            Plan for Visit
            </Link>
            
            </button>
        </div>
    </div>
  </div>

  <ArrowContainer>
      <KeyboardDoubleArrowDown className='arrow' sx={{fontSize: '3.5rem' ,color: "white"}}/>
      </ArrowContainer>
        </LandingSectionStyles>
    );
}

export default LandingSection;