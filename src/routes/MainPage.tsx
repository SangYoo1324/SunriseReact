import React from 'react';
import LandingSection from '../components/mainPage/LandingSection';
import Intro from '../components/mainPage/Intro';
import RecentNews from '../components/mainPage/RecentNews';

function MainPage(props) {
    return (
        <div>
            <LandingSection/>
            <Intro/>
            <RecentNews/>
        </div>
    );
}

export default MainPage;