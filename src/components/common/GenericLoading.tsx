import React from 'react';

function GenericLoading({ children = (<></>) }) {
    return (
        <div>
        {children}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
         
        
            <p className="text-xl font-semibold text-gray-700">Loading...</p>
        </div>
        </div>

    );
}

export default GenericLoading;