//under ViewPhoto.tsx(Route)
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncIndivPhotoEvent } from '../../context/redux/slice/PhotoEventSlice';

function Photo({photoObject}) {

    if(!photoObject) return null;


    return (
        <div className="container mx-auto p-6">
        {/* Title and subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-900">{photoObject.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{photoObject.subTitle}</p>
          <p className="text-sm text-gray-500 mt-1">{new Date(photoObject.date).toLocaleDateString()}</p>
        </div>
  
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {photoObject.s3_urls.map((url, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 cursor-pointer transition-transform duration-300">
              <img src={url} alt={`${photoObject.title} ${index + 1}`} className="w-full max-h-[300px] object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Photo;