'use client';

import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from "react";

function Nav() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    return (
        <nav className='navbar w-full h-20 flex items-center justify-between'>
            <div className='nav-logo font-montserrat font-light'>
                <Link href='/'>
                    <h1>MoneyTracker</h1>
                </Link>
            </div>
            <div ref={navRef} className='nav-link flex w-1/4 justify-between items-center'>
                <Link href='/' className="hover:underline">
                    <li>Home</li>
                </Link>
                <Link href='/about' className="hover:underline">
                    <li>About</li>
                </Link>
                <Link href='/dashboard'>
                    <button
                        className="sign-in-btn bg-transparent hover:bg-green-900 duration-200 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                    >Sign In</button>
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes className="absolute top-2 right-2 text-6xl" />
                </button>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </nav>
    )
}

export default Nav;