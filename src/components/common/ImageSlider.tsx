import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';

function ImageSlider({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = ()=>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1: currentIndex-1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = ()=>{
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (idx)=>{
            setCurrentIndex(idx);
    }

    return (
        <div className='max-w-1400px h-[580px] m-auto py-16 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-1000'
            style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>

            {/* left-arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 
            group-hover:bg-white/20 hover:text-gray-400 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>

                {/* Right-arrow */}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 
                group-hover:bg-white/20 hover:text-gray-400 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex)=>(
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
                        {slideIndex===currentIndex ?<RxDotFilled size={25}/> :<RxDot size={25}/>}
                    </div>
                    ))}
            </div>
        </div>
    );
}

export default ImageSlider;