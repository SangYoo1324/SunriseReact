import React from 'react';

function OpeningParagraph({firstWord, secondWord, semicolonLocation}) {

    return (
        <div className='pb-4'>
            <span className='text-gray-400 text-3xl'>{firstWord}{semicolonLocation==="middle"? ",": ""}</span> &nbsp;
            <span className='text-indigo-900 text-3xl font-semibold'>{secondWord}{semicolonLocation==="end"? ",": ""}</span>
        </div>
    );
}

export default OpeningParagraph;