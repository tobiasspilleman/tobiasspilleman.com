import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-image.png';

const NavigationBar = () => {

    return (
        <>
            <nav className="full bg-transparent px-10 lg:px- py-4 border-b border-gray-300 flex items-center justify-center sticky top-0">
                <div>
                    <a href='https://tobiasspilleman.com' className="flex items-center">
                        <Image src={logo} alt="Logo" className="w-7 h-7 mr-3" />
                        <h2 className="font-bold text-2xl font-inter">Tobias Spilleman</h2>
                    </a>
                </div>
                <div className="flex justify-end ml-auto">
                    <a href="#" className="text-sm font-inter text-gray-600 font-medium">Home</a>
                    <a href="/blog" className="text-sm font-inter text-gray-600 font-medium ml-4">Blog</a>
                    <a href="/projects" className="text-sm font-inter text-gray-600 font-medium ml-4">Projects</a>
                    <a href="/about" className="text-sm font-inter text-gray-600 font-medium ml-4">About</a>
                    <a href="#" className="text-sm font-inter text-gray-600 font-medium ml-4">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;