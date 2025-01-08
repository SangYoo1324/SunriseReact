import React from 'react';
import PageTitle from '../components/common/PageTitle';
import DirectionInfo from '../components/visitors/DirectionInfo';
import Contact from '../components/visitors/Contact';

function Visitors(props) {
    return (
        <div>
        <PageTitle title={"Visitors Info"} subTitle={"Always Welcome to Visit"}/>
        <DirectionInfo/>
        <Contact/>
        </div>
    );
}

export default Visitors;