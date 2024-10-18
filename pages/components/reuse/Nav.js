import React, { useEffect, useState } from 'react';
import Link from "next/link";
// icons
import { FaBars } from "react-icons/fa6";

export default function Nav() {
  const [hideHeader, setHideHeader] = useState(false); // State to hide the header

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Hide the header after scrolling 5%
      if (scrolled > totalHeight * 0.05) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* First section to hide smoothly after scrolling 5% */}
        <div
          className={`text-center bg-blue-600 text-white transition-all duration-700 ease-in-out ${
            hideHeader ? 'max-h-0 overflow-hidden' : 'max-h-20'
          }`}
          style={{ transition: 'max-height 0.7s ease-in-out' }} // Ensuring smooth transition
        >
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            culpa?
          </p>
        </div>

        {/* Sticky navigation bar */}
        <div className="flex justify-between items-center py-5 px-6">
          <div className="logo text-xl font-semibold">Logo</div>
          <nav className="max-sm:hidden flex gap-4">
            <Link href="">Home</Link>
            <Link href="">Courses</Link>
            <Link href="">About</Link>
            <Link href="">Privacy</Link>
            <Link href="">Terms</Link>
          </nav>
          <span className="hidden max-sm:block">
            <FaBars size={30} />
          </span>
        </div>
      </header>
    </>
  );
}
