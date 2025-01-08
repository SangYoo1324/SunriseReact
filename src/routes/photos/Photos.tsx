import React, { useContext, useEffect, useState } from 'react';
import PageTitle from '../../components/common/PageTitle';
import PhotoList from '../../components/photos/PhotoList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPhotoEvent } from '../../context/redux/slice/PhotoEventSlice';
import { AppDispatch } from '../../context/redux/store';
import Pagination from '../../components/common/Pagination';
import GlobalContext from '../../context/GlobalContext';
import GenericLoading from '../../components/common/GenericLoading';


function Photos(props) {
    const globalContext = useContext(GlobalContext);
    const dispatch = useDispatch<AppDispatch>();
    const photoEventList = useSelector((state:any)=> state.photoEvent) 
    const [photoEventListByPage, setPhotoEventListByPage] = useState([]);
    const [perPage, setPerPage] = useState(5);
    useEffect(()=>{
        dispatch(asyncPhotoEvent({}));
    },[]);
    const [page,setPage] = useState(0);

    // photoEvent api fetch 함수
    useEffect(()=>{
        globalContext.setPhotoEventList(photoEventList);
        console.log("photoEventList:", photoEventList);
    }, [photoEventList]);

    // photoEvent api fetch 가 끝났다는 전제 하에, page 에 따라 photoEventListByPage 업데이트
    useEffect(()=>{
        if(!photoEventList.error && photoEventList.data && photoEventList.data.length>0){
            let trimmer =
            photoEventList  
             .data.slice(page*perPage,(page+1)*perPage);

            setPhotoEventListByPage(trimmer);
              // 스크롤을 맨 위로 이동
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 스크롤을 부드럽게 이동하려면 "smooth" 옵션 사용
        });
        }
        else{
            console.log("PhotoEventList api fetch에 이상이 있습니다.");
        }
    },[page,photoEventList]);

    if(photoEventList.loading)
        return <GenericLoading>
             <PageTitle title={'Photo Gallery'} subTitle={'Sunrise Comminity Church\'s special memories'}/>
        </GenericLoading>

    return (
        <div>
            {photoEventList.data && (
                     <div>
                     <PageTitle title={'Photo Gallery'} subTitle={'Sunrise Comminity Church\'s special memories'}/>
                     <PhotoList photoEventList={photoEventListByPage}/>
                     <Pagination length={photoEventList.data.length} perPage={perPage} setPage={setPage}/>
                     </div>

            )}
        </div>
    );
}

export default Photos;