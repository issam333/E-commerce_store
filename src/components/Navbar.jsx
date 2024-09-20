import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";


const Navbar = () => {
    return (
        <>
            <div className=' flex justify-between mt-[40px] mx-[140px] items-center'>
                <div>
                    <h1 className='font-serif'>La Sape</h1>
                </div>
                <div>
                    <ul className=' flex w-[40vw] justify-between'>
                        <li className='font-serif'>Home</li>
                        <li className='font-serif'>Suit</li>
                        <li className='font-serif'>suit accessories</li>
                        <li className='font-serif'>shoes</li>
                        <li className='font-serif'>shirts</li>
                    </ul>
                </div>
                <div>
                    <ul className=' flex w-[20vw] justify-between items-center'>
                        <li className='font-serif flex flex-col justify-center items-center h-full'>
                            <FaRegUser size={'30px'} />
                            <p>profile</p>
                        </li>
                        <li className='font-serif flex flex-col justify-center items-center h-full'>
                            <IoIosHeartEmpty size={'30px'} />
                            <p>wishlist</p>
                        </li>
                        <li className='font-serif flex flex-col justify-center items-center h-full relative'>
                            <div className='relative'>
                                <BsHandbag size={'30px'} />
                                <span className='absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
                                    3
                                </span>
                            </div>
                            <p>bag</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar