import React from 'react';
import Background from '../../assets/common/christmasTheme.jpg';
import styled, { keyframes } from 'styled-components';


// 슬라이드 애니메이션 정의
const SlideInFromLeft = keyframes`

  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideInFromRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// 바 늘어나는 애니메이션 정의
const ExpandWidth = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 200px;
    opacity: 1;
  }
`;

const PageTitleStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-image: url(${Background});
  background-size: cover;
   background-position: 50% 80%; /* X축 30%, Y축 30% */
  color: white;
  text-align: center;

  h1{
   animation: ${SlideInFromLeft} 1s ease forwards;
  }

    h2{
   animation: ${SlideInFromRight} 1s ease forwards;
  }


  &::before{
  content: '';
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(0, 0, 0, 0.6); /* 어두운 오버레이 */
  z-index: 1;
  }
  /* 텍스트가 오버레이 위에 표시되도록 */
  .content {
    position: relative;
    z-index: 2;
  }
`

const Bar = styled.div`
  width: 200px;
  height: 2px;
  background-color: white;
  margin: 0.5rem 0;
  animation: ${ExpandWidth} 1s ease forwards;
  margin: 0.5rem auto;
`;

function PageTitle({title, subTitle}) {
    return (
        <PageTitleStyle>
             <div className="content">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <Bar/>
        <h2 className="text-lg font-light">{subTitle}</h2>
      </div>
        </PageTitleStyle>
    );
}

export default PageTitle;