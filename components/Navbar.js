"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Icons for hamburger and close

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='h-[10vh] px-3 bg-blue-800 flex justify-between items-center text-white relative'>
            <div className="logo font-bold text-xl"><Link href="/">TinyLinks</Link></div>

            {/* Desktop nav */}
            <div className="navigations hidden md:block h-full">
                <ul className='h-full flex gap-4'>
                    <Link className='h-full flex justify-center items-center px-4 hover:bg-amber-100 hover:text-blue-800' href="/"><li>Home</li></Link>
                    <Link className='h-full flex justify-center items-center px-4 hover:bg-amber-100 hover:text-blue-800' href="/about"><li>About</li></Link>
                    <Link className='h-full flex justify-center items-center px-4 hover:bg-amber-100 hover:text-blue-800' href="/contact"><li>Contact Us</li></Link>
                    <Link className='h-full flex justify-center items-center px-4 hover:bg-amber-100 hover:text-blue-800' href="/shorten"><li>Shorten</li></Link>
                </ul>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Sidebar for Mobile */}
            {open && (
                <div className="absolute top-[10vh] left-0 w-2/3 h-screen bg-blue-900 text-white z-50 flex flex-col gap-4 p-4 md:hidden">
                    <Link href="/" onClick={() => setOpen(false)} className='hover:text-amber-300'>Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className='hover:text-amber-300'>About</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className='hover:text-amber-300'>Contact Us</Link>
                    <Link href="/shorten" onClick={() => setOpen(false)} className='hover:text-amber-300'>Shorten</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
