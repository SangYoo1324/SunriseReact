import React, { useEffect } from 'react';
import IndivPhoto from '../../components/photos/Photo';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIndivPhotoEvent } from '../../context/redux/slice/PhotoEventSlice';
import { AppDispatch } from '../../context/redux/store';
import Photo from '../../components/photos/Photo';
import PageTitle from '../../components/common/PageTitle';
import { ArrowLeft } from '@mui/icons-material';
import GenericLoading from '../../components/common/GenericLoading';

function ViewPhoto(props) {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const photoObject = useSelector((state:any)=>state.photoEvent);
    useEffect(()=>{
        console.log("photoId:", id);
        dispatch(asyncIndivPhotoEvent(id));
   
    },[]);

    useEffect(()=>{
        console.log("indivPhotoObject: ",photoObject);
        
    },[photoObject])


    if(photoObject.loading) return <GenericLoading>
    <PageTitle title={'Photo Gallery'} subTitle={'Sunrise Comminity Church\'s special memories'}/>
          </GenericLoading>
      


    return (
        <div>
       <PageTitle title={'Photo Gallery'} subTitle={'Sunrise Comminity Church\'s special memories'}/>
              {/* Back to List button */}
              <div 
                className='flex items-center justify-end p-5 text-indigo-700 text-xl font-semibold cursor-pointer hover:text-indigo-900 transition duration-200' 
                onClick={() => navigate("/photos")}
            >
                <ArrowLeft className='' />
                Back to List
            </div>

       <Photo photoObject={photoObject.indivData}/>    
        </div>        
        
    );
}

export default ViewPhoto;