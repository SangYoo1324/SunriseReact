import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ImageSlider from '../common/ImageSlider';

function YouthContents(props) {
    const slides = [
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_1715836816245d48b6f46-9854-412b-a8b7-66eb30f0eae9.jpg", title: ''},
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_17158368163217a2d14ae-0dd8-48fa-ba33-2e12037afab0.jpg", title: ''},
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_1715836816516bb16b262-f92c-440d-953b-444ca446d69b.jpg", title: ""},
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_171583681658429e2b5fd-cc14-4227-afca-d1b06613bd39.jpg", title: ""},
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_17158368170478fa56b06-d8ce-4ab5-bf56-6f4debef2f65.jpg", title: ""},
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_171583681749321936379-6016-47ad-883d-d927cb7bf950.jpg", title:""},
        {url: "https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/sunrise_photoEvent_1715836817548511652f8-aa58-4eaa-8cce-323d82c9ae9f.jpg", title: ""}
        ]

    return (
        <div className='my-7 lg:my-0'>
            {/* <SectionTitle title="Youth Contents" subTitle="Check Our Youth Contents"/> */}
            <ImageSlider slides={slides}/>
        </div>
    );
}

export default YouthContents;