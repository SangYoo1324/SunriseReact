import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import GenericItemList from '../../common/GenericItemList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../context/redux/store';
import { asyncSermon } from '../../../context/redux/slice/SermonSlice';
import GenericLoading from '../../common/GenericLoading';
import Pagination from '../../common/Pagination';
import { SermonItem } from '../../../interface/SermonItem';
import SermonModal from './SermonModal';

function SermonList(props) {

    const perPage = 6;
    const dispatch = useDispatch<AppDispatch>();
    const sermonState = useSelector((state:any)=>state.sermon);
    const [page, setPage] = useState(0);
    const [sermonListByPage, setSermonListByPage] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [sermon, setSermon] = useState({
        title: 'aaaaaa',
        iframe: 'https://www.youtube.com/embed/KyU74Ux58ik',
        scripture: '',
        date: ''
    });


    // trigger modal opens the modal and also set the sermonItem Object clicked each time
    const triggerModal = (sermon:SermonItem)=>{
        setIsOpen(true);
        setSermon(
           sermon
    );

    }

    const onClose = ()=>{
        setIsOpen(false);
        setSermon({
            title: 'aaaaaa',
            iframe: 'https://www.youtube.com/embed/KyU74Ux58ik',
            scripture: '',
            date: ''
        });
    }
    
    useEffect(()=>{
        dispatch(asyncSermon());

    },[]);

    useEffect(()=>{

    },[page, sermonState]);

    useEffect(()=>{
        console.log("Page chnged to,", page);
        if(!sermonState.error && sermonState.data && sermonState.data.length>0){
            let trimmer = sermonState.data.slice(page*perPage, (page+1)*perPage);
            setSermonListByPage(trimmer);
        }
    }, [page, sermonState.data]);



    if(sermonState.loading) return (<>
        <SectionTitle subTitle={"Sunday Services"} title={"Weekly Sunday Service Archive"}/> 
        <GenericLoading/>
    </>)



    return (
        <section className='relative'>
            <SectionTitle subTitle={"Sunday Services"} title={"Weekly Sunday Service Archive"}/> 
            <div>
             <>
                <GenericItemList source={sermonListByPage || []} linkBaseAddress={undefined} 
                imgParamName={undefined} hasThumbnail={true} staticImg={'/assets/biblepic.jpg'} triggerModal={triggerModal}/>



                <Pagination length={ sermonState.data? sermonState.data.length :0} perPage={6} setPage={setPage}/>
            </>

            
            </div>

            {/* sermon modal  */}
            <SermonModal isOpen={isOpen} onClose={onClose} sermonItem= {sermon}/>
        </section>
    );
}

export default SermonList;