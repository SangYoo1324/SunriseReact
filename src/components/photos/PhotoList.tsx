import React from 'react';
import { Link } from 'react-router-dom';
import GenericItemList from '../common/GenericItemList';

function PhotoList({photoEventList}) {

    if(!photoEventList || photoEventList.length ===0){
        return (<p>No Photos Available.</p>)
    }



    return (
        <section className="py-8 px-4 bg-gray-100">
            <GenericItemList source={photoEventList} linkBaseAddress={'photo'} imgParamName={'s3_urls'} hasThumbnail={false} staticImg={undefined}/>
    </section>
    );
}

export default PhotoList;

