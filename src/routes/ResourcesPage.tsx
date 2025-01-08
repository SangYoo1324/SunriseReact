import React from 'react';
import PageTitle from '../components/common/PageTitle';
import ResourcesList from '../components/resources/ResourcesList';

function Resources(props) {


    return (
        <div>
            <PageTitle title={"Resources"} subTitle={"Useful Sources & Archives"}/>
            <ResourcesList />
        </div>
    );
}

export default Resources;