import React, { useEffect, useState } from 'react';

function SermonModal({ isOpen, onClose, sermonItem }) {

    const [isModalBodyOpened, setIsModalBodyOpened] = useState(false);

    // 모달 닫힐 때 애니메이션 처리
    const handleClose = () => {
        setIsModalBodyOpened(false);
        setTimeout(() => {
            onClose(); // 완전히 닫힘
        }, 300); // transition duration과 동일하게 설정
    };

    // 처음 열릴 때는 isOpen이 먼저 바뀌면서 bg가 visible로 바뀐 후에, useEffect 가 발동되서
    // 그다음에 ModalBodyOpened가 true로 바뀌면서 위로 올라가는 애니메이션 형2./ㅌ,,./ㅋ ㅣ[ㄱ']
    // useEffect 로 isOpen 변경 시에 발동되게 보장 되서 setTimeOut 불필요
    useEffect(() => {
        if (isOpen) setIsModalBodyOpened(true);
    }, [isOpen]);

    useEffect(()=>{
        console.log("sermonItem::", sermonItem);
    },[]);


    return (
        <div className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300
         top-0 left-0 w-full h-[100vh] z-20 bg-gray-300/50 flex flex-col items-center justify-end`}>

            <div className="fixed top-0 left-0 w-full h-[100vh] z-20 bg-gray-300/50 flex flex-col items-center justify-end">
                {/* 모달 창 */}
                <div
                    className={`bg-white rounded-lg shadow-lg p-6 w-full min-h-[70%] relative transform transition-transform duration-300 ${isModalBodyOpened ? 'translate-y-0' : 'translate-y-full'
                        }`}
                >

                    {/* bar  */}
                    <div
                        onClick={handleClose}
                        className="w-12 h-1.5 px-3 py-1 bg-gray-400 rounded-full mx-auto mb-4 hover:cursor-pointer hover:bg-yellow-300"></div>

                    <h2 className="text-xl font-bold mb-4">{sermonItem.title}</h2>
                    <p className="text-gray-700">
                        <iframe
                            src={sermonItem.iframe}
                            className="mx-auto h-[400px] w-full md:w-[95%] md:h-[500px]"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </p>
                    {/* <button
                       
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    >

                    </button> */}
                </div>
            </div>

        </div>
    );
}

export default SermonModal;