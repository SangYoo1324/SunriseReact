import React from 'react';

function GenericListCard({ title, description, imageUrl, link, isSimplePhotoTitle= false }) { //isSimplePhotoTitle: 사진과 제목만 필요한 카드인 경우 true
  return (
    <div className="bg-white rounded-lg shadow-extra-dark hover:shadow-2xl hover:translate-y-1 transition-all duration-200 transform overflow-hidden">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="text-red-600">{title}</span>
        </h3>
        {!isSimplePhotoTitle && <p className="text-sm text-gray-600 mt-2">{description}</p>}
        {
            !isSimplePhotoTitle &&
            <a 
            href={link}
            className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Learn more →
          </a>
        }
      </div>
    </div>
  );
}

export default GenericListCard;