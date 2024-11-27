import React from "react";
import img from '../../public/assets/logo-image.png';

const WelcomeComponent = () => {
    return (
        <div className='h-[calc(100vh-80px)] w-full flex justify-center items-center'>
            <div className='bg-grey-light h-[85vh] md:h-[85vh] w-[90vw] mb-6 md:my-0 rounded-xl flex flex-col justify-center items-center text-5xl md:text-9xl'>
                <img src={img.src} alt="Tobias Spilleman Website Portfolio Background Image" className='absolute size-56 md:size-auto' />
                <h1 className='font-extrabold text-gold relative bottom-16 md:bottom-28'>HI, I`M TOBI</h1>
            </div>
        </div>
    );
};

export default WelcomeComponent;