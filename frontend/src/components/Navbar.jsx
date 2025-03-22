import React, { use, useState } from 'react';
import { href, Link } from 'react-router';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import avataImg from '../assets/avatar.png';

const navigation = [
    {
        name: 'Dashboard', href: '/dashboard',
    },
    {
        name: 'Orders', href: '/orders',
    },
    {
        name: 'Cart Page', href: '/cart',
    },
    {
        name: 'Check Out', href: '/checkout',
    },

]




const Navbar = () => {
    // display dropdown menu when user is logged in
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // test outputnpm 
    // when there is no user logged in
    const curent_user = false;

    return (
        <header className="max-w-screen-2xl mx-auto px-10 py-6  top-0 left-0 w-full bg-white">
            <nav className='flex justify-between items-center'>
                {/* left side */}
                <div className="flex items-center md:gap-16  gap-4">
                    <Link to='/'>
                        <HiMiniBars3CenterLeft className="size-8" />
                    </Link>
                    {/* seacrh input */}
                    <div className='relative sm:w-72 w-4 space-x-1'>
                        <input type="text" placeholder="Search here"
                            className="bg-[#eaeaea]
                    w-full py-1 md:px-8 px-6
                    focus:outline-none
                    rounded-md" />
                        <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2" />
                    </div>

                </div>

                {/* right side */}
                <div className='relative flex items-center md:space-x-3 space-x-2'>
                    <div>
                        {/* check if user is logged in */}
                        {
                            curent_user ? <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avataImg} alt='avatar' className={`size-7 rounded-full ${curent_user ? 'ring-2 ring-blue-500' : ''}`} />
                                </button>
                                {/* show dropdown menu */}
                                {
                                    isDropdownOpen && (
                                        <div className='absolute mt-2 right-0 bg-white  w-48 shadow-lg p-4 rounded-md z-40'>
                                            <ul className='py-2'>
                                                {
                                                    navigation.map((item) => (
                                                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                            <Link to={item.href} className='block py-2 hover:bg-gray-100  px-4 rounded-md text-sm'>
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )

                                }
                            </> :

                                <Link to='/login'><FaRegUser className='size-6' /></Link>
                        }
                    </div>
                    {/* user icon */}
                    {/* <FaRegUser className='size-6' /> */}
                    {/* heart icon */}
                    <button className='hidden sm:block'>
                        <FaRegHeart className='size-6' />
                    </button>
                    <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 
                    flex items-center rounded-sm'>
                        <IoCartOutline className=' ' />
                        <span className='text-sm font-semibold sm:ml-1 ml-0'>0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

