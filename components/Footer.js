import React from 'react'
import Link from 'next/link'
import { Facebook, Github, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                {/* Left: Branding */}
                <div className="text-center md:text-left">
                    © {new Date().getFullYear()} TinyLinks — All rights reserved.
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4">
                    <Link href="https://www.facebook.com/rabiulsarkar3841/" target="_blank">
                        <Facebook className="hover:text-amber-300 cursor-pointer" size={20} />
                    </Link>
                    <Link href="https://github.com/rabiul-2004" target="_blank">
                        <Github className="hover:text-amber-300 cursor-pointer" size={20} />
                    </Link>
                    <Link href="https://www.instagram.com/rabiulsarkar_3841/" target="_blank">
                        <Instagram className="hover:text-amber-300 cursor-pointer" size={20} />
                    </Link>
                    <Link href="https://x.com/RabiulS16923767" target="_blank">
                        <Twitter className="hover:text-amber-300 cursor-pointer" size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rabiul-sarkar-759081309" target="_blank">
                        <Linkedin className="hover:text-amber-300 cursor-pointer" size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
