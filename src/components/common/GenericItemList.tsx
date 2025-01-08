import React from 'react';
import { Link } from 'react-router-dom';

// source should be list format, linkBaseAddress= router base address, params, make staticImg Null if u want to use dynamic img
function GenericItemList({source =[], linkBaseAddress, imgParamName, hasThumbnail ,staticImg}) {


    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {source.map((e, index) => (
            <Link to={`/${linkBaseAddress}/${e.id}`}
                
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
                <div className="relative h-48">
                    <img
                        className="w-full h-full object-cover"
                        // StaticImg를 비워뒀다면 dynamic Thumbnail 사용, img가 여러개면 첫번째 이미지를 사용.
                        src={staticImg? staticImg : hasThumbnail ? e[imgParamName] : e[imgParamName][0] } 
                        alt={e.title}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <h2 className="text-lg font-semibold text-white truncate">{e.title}</h2>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-gray-600 mt-2 text-sm line-clamp-2 overflow-hidden">{e.description || "No description available."}</p>
                    <p className="text-gray-400 mt-2 text-xs">
                        {new Date(e.date).toLocaleDateString()}
                    </p>
                </div>
            </Link>
        ))}
    </div>
    );
}

export default GenericItemList;