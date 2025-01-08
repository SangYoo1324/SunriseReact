import { BuildTwoTone } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

function Pagination({length=0, perPage=5, setPage}) {
    const [pageBundleIndex, setPageBundleIndex] = useState(0);
    const [currentPage,setCurrentPage] = useState(0);
    const ttlPages = Math.floor((length-1)/perPage+1); 

    const [isMoreRight, setIsMoreRight] = useState(false);
    
    const handleNext = ()=>{
    
        // 만약 currentPage가 마지막 페이지라면 
        if(currentPage===ttlPages-1){
            setCurrentPage(0);
        
        }else
         setCurrentPage(currentPage+1);
    }

    const handleToEnd = ()=>{
        setCurrentPage(ttlPages-1);
        // setPageBundleIndex(Math.floor((ttlPages-1)/perPage/5));
    }

    const handlePrev = ()=>{
        if(currentPage===0){
            alert("You are currently on the first page");
        }else{
            if((currentPage)%5 === 0){
                setPageBundleIndex(pageBundleIndex-1);
            }
            setCurrentPage(currentPage-1);
        }
    }

    const handleToStart = ()=>{
        setCurrentPage(0);
        setPageBundleIndex(0)
    }
    const handlePageClick = (i)=>{
        setCurrentPage(i);
    }


    //currentPage가 바뀔 때마다 부모 page 상태 업데이트
    useEffect(()=>{
        console.log("currentPageIdx:", currentPage);
        setPage(currentPage);
        const endOfPageBundleIdx = (ttlPages-1)/perPage/5;  // if 11pages, 10/1/5; = 2 is the end index    

        // currentPage 로 pageBundleIndex 유추 후 업데이트
        setPageBundleIndex((Math.floor((currentPage)/5)));
    },[currentPage]);


    
    return (
      <div className="flex items-center justify-center space-x-1 mt-8">
    {/* <!-- 맨 처음으로 이동 버튼 --> */}
    <button onClick={handleToStart} className="lg:px-3 px-2 lg:py-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
        &laquo;
    </button>
    
    {/* <!-- 왼쪽(이전 페이지) 버튼 --> */}
    <button onClick={handlePrev} className="lg:px-3 px-2 lg:py-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
        &lt;
    </button>
    
    {/* <!-- 페이지 번호 --> */}
    {
Array.from({length: ttlPages>5 ? ttlPages<(pageBundleIndex+1)*5? ttlPages-(pageBundleIndex)*5: 5 : ttlPages}, (_,i)=>(
    <button
    key={i}
    onClick={()=>handlePageClick(i+5*pageBundleIndex)}
    className={`lg:px-3 px-2 lg:py-2 py-1 rounded ${(i+5*pageBundleIndex)===currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-blue-200'}`}
    >
        {i+1+5*pageBundleIndex}
    </button>
))
    }

    {/* {isMoreRight && (<button className="lg:px-3 px-2 lg:py-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
        ..
    </button>)} */}

    {/* <!-- 오른쪽(다음 페이지) 버튼 --> */}
    <button onClick={handleNext} className="lg:px-3 px-2 lg:py-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
        &gt;
    </button>
    
    {/* <!-- 맨 뒤로 이동 버튼 --> */}
    <button onClick={handleToEnd} className="lg:px-3 px-2 lg:py-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
        &raquo;
    </button>
</div>
    );
}

export default Pagination;