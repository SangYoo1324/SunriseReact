import React from 'react';
import YouthIntro from '../components/youth/YouthIntro';
import PageTitle from '../components/common/PageTitle';
import YouthContents from '../components/youth/YouthContents';

function Youth(props) {
    return (
        <div>
          <PageTitle title={"Children & Youth"} subTitle={"Contents for Children & Youth"}/>
          <YouthIntro/>
          <YouthContents/>
        </div>
    );
}

export default Youth;