"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden">
      {/* Top left gradient */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl"></div>
      
      {/* Bottom right gradient */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-600/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
  <Link href="/" className="text-2xl font-bold flex items-center gap-2">
    <img src="./logo.png" alt="logo" width={34} height={34} />
    OG Editor
  </Link>
</div>

          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-purple-500">HOME</Link>
            <Link href="#about" className="hover:text-purple-500">ABOUT</Link>
            <Link href="#portfolio" className="hover:text-purple-500">PORTFOLIO</Link>
            <Link href="#testimonials" className="hover:text-purple-500">TESTIMONIALS</Link>
            <Link href="#contact" className="hover:text-purple-500">CONTACT</Link>
          </div>
          
        
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <a
    href="https://calendly.com/rksttfu"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
  >
    Book a Call
  </a>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 py-2">
            <Link href="/" className="block py-2 px-4 hover:bg-gray-800">HOME</Link>
            <Link href="#about" className="block py-2 px-4 hover:bg-gray-800">ABOUT</Link>
            <Link href="#portfolio" className="block py-2 px-4 hover:bg-gray-800">PORTFOLIO</Link>
            <Link href="#testimonials" className="block py-2 px-4 hover:bg-gray-800">TESTIMONIALS</Link>
            <Link href="#contact" className="block py-2 px-4 hover:bg-gray-800">CONTACT</Link>
          </div>
        )}
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-light mb-2">Rakshit sharma</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              PROFESSIONAL<br />
              VIDEO EDITOR
            </h1>
            <p className="text-gray-300 mb-8">Making Your Videos Look More Cool.</p>
            <a
  href="https://www.instagram.com/og.motions/?ref=malloy.sg#"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-purple-700 hover:bg-purple-800 text-white py-2 px-8 rounded text-center transition duration-300"
>
  LET'S TALK
</a>

          </div>
          
          <div className="md:w-1/2 relative">
           <img src='./head.png'/>
          </div>
        </div>
      </div>
    </header>
  );
}