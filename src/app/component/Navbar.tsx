"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { LuHeart } from "react-icons/lu";
import Link from "next/link"
import { IoIosMenu } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { LiaCarSolid } from "react-icons/lia";
import { TbCalculator } from "react-icons/tb";
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [activeButton, setActiveButton] = useState('signup');
    const [dropDown, setDropDown] = useState(false)
    const handleLoginClick = () => {
        setActiveButton('login');
    };
    const handleSignupClick = () => {
        setActiveButton('signup');
    };

    const closeDropdown = () => {
        setDropDown(false);
    };

    return (
        <div className='bg-white shadow-xl sticky left-0 right-0 top-0 z-50 '>
            <div className='flex relative bg-white  items-center   justify-between  md:w-[90%] md:mx-auto px-5 xl:p-1   py-1'>
                <Link href="/">
                        <Image src="/car-logo.png" alt="Logo" width={90} height={26} className='xl:w-20  w-14 ' />
                </Link>

                <div className='xl:block hidden'>
                    <ul className='text-md flex items-center xl:space-x-10 space-x-4'>
                        <li className={activeLink === 'Home' ? 'text-[#0B5CFF]' : 'hover:text-blue-500'}>
                            <Link href="/" onClick={() => setActiveLink('Home')}>
                                Home
                            </Link>
                        </li>
                        <li className={activeLink === 'Used Cars' ? 'text-[#0B5CFF]' : 'hover:text-blue-500'}>
                            <Link href="/" onClick={() => setActiveLink('Used Cars')}>
                                Used Cars
                            </Link>
                        </li>
                        <li className='hover:text-[#0B5CFF]'>
                            <Link href="/">Car Payment Calculator</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center xl:space-x-3 space-x-2'>
                    
                    <Link href="/">
                        <div className=' md:w-12 md:h-12 w-8 h-8   xl:rounded-xl rounded-lg bg-[#F6F7F9] mx-auto flex items-center  flex-col justify-center'>
                            <LuHeart className='text-[#0B5CFF] cursor-pointer xl:text-xl text-md' />
                        </div>
                    </Link>

                    <div onClick={() => setDropDown(!dropDown)} className=' md:w-12 md:h-12 w-8 h-8   xl:rounded-2xl rounded-lg xl:hidden block bg-[#0B5CFF] mx-auto flex items-center  flex-col justify-center'>
                        <IoIosMenu className='text-white cursor-pointer xl:text-3xl text-xl' />
                    </div>
                    <div className='flex items-center gap-1 xl:border-[#0B5CFF] xl:border-2 xl:rounded-2xl xl:p-1'>
                        <button
                            className={`focus:bg-[#0B5CFF] xl:block hidden cursor-pointer   w-24 text-sm    text-[#1A202C] rounded-xl text-center p-3 ${activeButton === 'login' ? 'bg-[#0B5CFF] text-white' : ''
                                }`}
                            onClick={handleLoginClick}
                        >
                            Login
                        </button>
                        <button
                            className={`focus:bg-[#0B5CFF]  xl:block hidden cursor-pointer  w-24 text-sm       text-[#1A202C] rounded-xl text-center p-3 ${activeButton === 'signup' ? 'bg-[#0B5CFF] text-white' : ''
                                }`}
                            onClick={handleSignupClick}
                        >
                            Signup
                        </button>
                    </div>
                </div>
                {/* mobile navbar dropdown */}

                {dropDown && (
                    <div className='bg-gray-100 absolute md:top-20 top-14 h-screen right-0 left-0 transition-all duration-300 ease-in-out'>
                        <div className='w-[85%] mx-auto mt-20'>
                            <Link href="/" onClick={closeDropdown} ><div className='flex items-center mt-2 gap-4 p-3 bg-white hover:bg-[#0B5CFF] rounded-xl hover:text-white text-[#1A202C]'>
                                <RiHome5Line className='text-3xl' />
                                <p className='text-md font-medium'>Home</p>
                            </div>
                            </Link>
                            < Link href="/usedCar" onClick={closeDropdown}  > <div className='flex items-center mt-2 gap-4 p-3 hover:bg-[#0B5CFF] bg-white rounded-xl hover:text-white'>
                                <LiaCarSolid className='text-3xl' />
                                <p className='text-md font-medium'>Used Cars</p>
                            </div>
                            </Link>
                            < Link href="/usedCar" onClick={closeDropdown}>
                                <div className='flex items-center mt-2 gap-4 p-3 bg-white hover:bg-[#0B5CFF] rounded-xl hover:text-white text-[#1A202C]'>
                                    <TbCalculator className='text-3xl' />
                                    <p className='text-md font-medium'>Car Payment Calculator</p>
                                </div>
                            </Link>
                            <div className='flex items-center gap-2 mt-20'>
                                <button className='bg-[#D3E2FF] text-sm w-full text-center p-3 rounded-xl'>Login</button>
                                <button className='bg-[#D3E2FF] text-sm w-full text-center p-3 rounded-xl'>Signup</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
