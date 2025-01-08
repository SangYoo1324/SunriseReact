import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SectionTitleStyle = styled.div`



.text-container {
    opacity: 0; /* 초기 상태에서 보이지 않음 */
    &.visible {
      opacity: 1;
    }

    h5,h1{
    opacity: 0;
    }

    &.visible h5 { 
      animation: ${slideIn} 0.8s ease-out forwards;
      animation-delay: 0s;
    }

    &.visible h1 {
      animation: ${slideIn} 0.8s ease-out forwards;
      animation-delay: 0.5s;
    }
  }



&::before{
        position: absolute;
        content: "";
        display: block;
        width: 0.2em; /* 짝대기의 너비를 조절 */
        height: 80%; /* 짝대기의 높이를 조절 */
        background-color: rgba(0,0,0,0.7); /* 짝대기의 색상 설정 */
        margin-right: 1rem; /* 짝대기와 제목 사이의 간격 조절 */
        left: -1%;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}

    @media (max-width: 768px) {
    &::before{
    left: 0%;
    }

    width: 95%;
}

`;

function SectionTitle({subTitle, title}) {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                    if(entry.isIntersecting){
                        console.log("Intersecting")
                        setIsVisible(true);
                    }
                    if(!entry.isIntersecting){
                        console.log("not Intersectiong")
                        setIsVisible(false);
                    }
            },
            {threshold: 1.0} // 요소가 30% 이상 보일 때 트리거
        );

        //ref에 해당 DOM이 할당 됬을 때 observe 시작
        if(ref.current){
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
    }
})

    return (
        <SectionTitleStyle
        ref={ref}
        className='relative boot-container py-8 flex items-center'>
            {/* 텍스트 컨테이너 */}
            <div className={`text-container flex flex-col justify-between items-start gap-5 ${isVisible? 'visible': ''}`}>
                <h5 className='lg:text-3xl md:text-3xl text-xl text-gray-600'>{subTitle}</h5>
                <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold text-indigo-900'>{title}</h1>
            </div>
        </SectionTitleStyle>
    );
}

export default SectionTitle;