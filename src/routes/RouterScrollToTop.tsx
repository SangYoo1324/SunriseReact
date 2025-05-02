import React from 'react';
import { useLocation } from 'react-router-dom';

function RouterScrollToTop(props) {
    const {pathname, hash} = useLocation();
        //hash 가 없을 땐 scroll 무조건 위에서
        if(!hash) {
            window.scrollTo({top:0, behavior: 'smooth'})
        }
    return null;
}

export default RouterScrollToTop;