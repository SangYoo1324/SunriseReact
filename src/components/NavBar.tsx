
import { MenuOutlined } from "@mui/icons-material";
import logo from "../assets/gmc_logo_transparent.png";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";


const StyledLink = styled(NavLink)`
font-size: 1.2rem;
font-weight: 500;
padding-bottom: 0.3rem;
margin-top: 5px;



`;

function navBar(props:any) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const location = useLocation();

    // navbar 컴포넌트 자체
    const menuRef = useRef(null);

    // navbar 외 클릭 시 dropdown 메뉴 닫히게 하기
    useEffect(()=>{
 const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false); // 메뉴 영역 외부 클릭 시 메뉴 닫기
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // 컴포넌트 언마운트 시 이벤트 제거
            document.removeEventListener("mousedown", handleClickOutside);
        };

    },[]);

    // 스크롤이 맨 위에 있으면 true, 아니면 false 설정
    useEffect(() => {
        // 새로고침 시 맨 위가 아니라면 배경 흰색으로
        if(window.scrollY !==0) setIsAtTop(false);

        const handleScroll = () => {
            
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleRouteChange = ()=>{
        setIsAtTop(true);
        setIsMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤
        });
    }

    return (
        <div ref={menuRef} className={`z-40 w-full fixed flex justify-between items-center text-black py-2 px-4 h-16
        lg:px-32 ${isAtTop ?" bg-transparent" :"bg-white"} drop-shadow-lg`}>
            <Link onClick={handleRouteChange} to="/" className="flex justify-around">
                <img src={logo} alt="" className='w-16 h-16 hover:scale-105 transition-all cursor-pointer mr-1'/>
                <div className="flex flex-col justify-center items-center">
                <p className={`${isAtTop? "text-white": "text-black"} font-bold text-xl`}>Sunrise Christ CC</p>
                <small className={`${isAtTop? "text-white": "text-black"} text-base
                    font-dancing-script`}>Sharing God's Shining Light</small>
                </div>
            </Link>
          
            <ul className='hidden lg:flex font-semibold text-base'>
                <li className={`
                    ${isAtTop? "text-white": "text-black"} ${location.pathname === '/visitors' ? 'bg-sky-400/70 text-white':''}
                    p-3 cursor-pointer hover:bg-sky-400 hover:text-white rounded-md transition-all`}>
                   <StyledLink onClick={handleRouteChange} to="/visitors">
                   Visitor Info
                    </StyledLink></li>
                <li className={`
                    ${isAtTop? "text-white": "text-black"}
                    p-3 cursor-pointer hover:bg-sky-400 hover:text-white rounded-md transition-all`}>
                <StyledLink onClick={handleRouteChange} to="/youth">
                Children & Youth
                    </StyledLink>
                    </li>
                <li className={`
                    ${isAtTop? "text-white": "text-black"}
                    p-3 cursor-pointer hover:bg-sky-400 hover:text-white rounded-md transition-all`}>
                <StyledLink onClick={handleRouteChange} to="/news">
                News & Activities
                    </StyledLink>
                    </li>

                <li className={`
                    ${isAtTop? "text-white": "text-black"}
                    p-3 cursor-pointer hover:bg-sky-400 hover:text-white rounded-md transition-all`}>
                <StyledLink onClick={handleRouteChange} to="/resources">
                Resources
                </StyledLink>
                    </li>
            </ul>

            <i className='flex lg:hidden text-5xl cursor-pointer items-center'
            onClick={()=> {
                setIsMenuOpen(!isMenuOpen)
                if(isAtTop){
                    setIsAtTop(false);
                }
         
            }}>
                <MenuOutlined sx={{fontSize: 35, color: isAtTop? 'white': 'black'}}/>
            </i>


            {/* dropDown Menu */}
            <div className={`absolute lg:hidden top-16 left-0 w-full bg-white flex flex-col
                items-center  font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 hidden"}`}
                style={{transition: "transform 0.3s ease, opacity 0.5s ease"}}>

                    <li className={`${location.pathname === '/visitors' ? 'bg-sky-400 text-white':''} list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer`} >
                    <StyledLink onClick={handleRouteChange} to="/visitors">
                    Visitor Info</StyledLink>
                    </li>
                    <li className={`${location.pathname === '/youth' ? 'bg-sky-400 text-white':''} list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer`}>
                    <StyledLink onClick={handleRouteChange} to="/youth">Children & Youth</StyledLink>
                    </li>
                    <li className={`${location.pathname === '/news' ? 'bg-sky-400 text-white':''} list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer`}>
                    <StyledLink onClick={handleRouteChange} to="/news">News & Activities</StyledLink>
                    </li>
                    <li className={`${location.pathname === '/resources' ? 'bg-sky-400 text-white':''} list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer`}>
                    <StyledLink onClick={handleRouteChange} to="/resources">Resources</StyledLink>
                    </li>
                </div>

        </div>
        
    );
}

export default navBar;