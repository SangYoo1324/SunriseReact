import React from 'react';
import SermonControl from '../components/adminPage/SermonControl';
import PageTitle from '../components/common/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../context/redux/store';

function AdminPage(props) {

    const dispatch = useDispatch<AppDispatch>();
     // API 호출 결과 및 로딩 상태 관리
    const { loading, error, success } = useSelector((state:any)=> state.sermon);
    return (
        <div>
                 <PageTitle title={'Admin Page'} subTitle={'-'}/>
            This is Admin Page


        <SermonControl/>
        </div>
    );
}

export default AdminPage;