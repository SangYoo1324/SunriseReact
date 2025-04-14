import { Close, Delete, DragHandle } from '@mui/icons-material';
import React, { useContext } from 'react';
import SampleImg  from '../../../assets/church_background.jpg'
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';
function CalendarModal(props) {

    const {setShowCalendarModal, selectedEvent, setSelectedEvent, isAdmin} = useContext(GlobalContext);

    return (
        <div className='z-20 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-gray-400/30'>

            {/* actual Modal  */}
            <div className='bg-white rounded-lg shadow-extra-dark sm:w-1/4 w-full'>
                <header className='bg-gray-100 px-4 py-1 flex justify-between items-center'>
                    <DragHandle className="material-icons-outlined text-gray-400">

                    </DragHandle>

                    <div>
                        <button className='regular-btn'>
                            <Delete className="text-gray-400 cursor-pointer">
                            </Delete>
                        </button>
                        <button className='regular-btn'
                        onClick={()=>{
                            setShowCalendarModal(false)
                            setSelectedEvent(null);        
                        }}>
                            <Close className="text-gray-400">

                            </Close>
                        </button>
                    </div>
                </header>

                {/* content  */}
                {/* Content */}
<div className="p-5 space-y-6">
  {/* Title */}
  <h3 className="text-2xl font-bold text-center text-blue-800">
    {selectedEvent.title}
  </h3>

  {/* Image Section */}
  <div className="w-full flex justify-center">
    <img 
      src={selectedEvent.s3_url} 
      alt={selectedEvent.title} 
      className="rounded-lg shadow-lg max-h-60 object-cover"
    />
  </div>

  {/* Date Section */}
  <div className="text-center">
    <p className="text-lg font-semibold text-gray-600">Event Date</p>
    <p className="text-xl font-medium text-gray-800">
      {dayjs(selectedEvent.date).format("YYYY-MMMM-DD")}
    </p>
    <p className="text-xl font-medium text-gray-800"> {selectedEvent.time}</p>
  </div>

  {/* Description */}
  <div className="space-y-3">
    <p className="text-lg font-semibold text-gray-600">Description</p>
    <p className="text-base text-gray-700 leading-relaxed">
      {selectedEvent.description}
    </p>
  </div>

  {/* Action Buttons */}
  {
    isAdmin && (
        <div className="flex justify-end gap-3">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-500 transition duration-200"
        >
          Edit
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-500 transition duration-200"
        >
          Delete
        </button>
      </div>
    )
  }

</div>
            </div>
        </div>
    );
}

export default CalendarModal;