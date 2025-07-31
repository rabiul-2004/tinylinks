"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef()

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <nav className="w-full h-[10vh] px-4 bg-blue-800 text-white flex justify-between items-center z-50 shadow-md">
            {/* <div className="logo font-bold text-xl">
                <Link href="/">TinyLinks</Link>
            </div> */}

            <Link href="/" className="flex items-center gap-2">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
                    <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
                </svg>
                <span className="text-xl font-bold text-white tracking-tight">Tiny<span className="text-amber-300">Links</span></span>
            </Link>


            {/* Desktop Nav */}
            <div className="hidden md:flex gap-4 h-full">
                <Link href="/" className="flex items-center px-4 hover:bg-amber-100 hover:text-blue-800 transition rounded-md">Home</Link>
                <Link href="/about" className="flex items-center px-4 hover:bg-amber-100 hover:text-blue-800 transition rounded-md">About</Link>
                <Link href="/contact" className="flex items-center px-4 hover:bg-amber-100 hover:text-blue-800 transition rounded-md">Contact Us</Link>
                <Link href="/shorten" className="flex items-center px-4 hover:bg-amber-100 hover:text-blue-800 transition rounded-md">Shorten</Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden z-50 relative" ref={dropdownRef}>
                <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Compact Dropdown Panel */}
                <div
                    className={`absolute right-0 top-19 md:mt-3 w-44 bg-blue-900 rounded-xl shadow-xl py-2 flex flex-col gap-2 text-sm transition-all duration-200 ease-in-out origin-top-right ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                        }`}
                >
                    <Link href="/" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-blue-700 hover:text-amber-300 transition">🏠 Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-blue-700 hover:text-amber-300 transition">ℹ️ About</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-blue-700 hover:text-amber-300 transition">📞 Contact</Link>
                    <Link href="/shorten" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-blue-700 hover:text-amber-300 transition">✂️ Shorten</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar