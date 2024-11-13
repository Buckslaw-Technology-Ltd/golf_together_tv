'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { MenuIcon } from "@/assets/icons";
import Logo from "@/assets/images/golf-tv-logo.png";
import Image from "next/image";


const Header: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className={`bg-[#F9F8F1] overflow-hidden w-full flex px-4 justify-between items-center`}>
      <div>
        <Link href="/">
          <Image width={92} height={47} src={Logo} alt="golf_together_logo" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <Link href="/" className={`text-tv_text font-medium`}>
          Live Games
        </Link>
        <Link href="/past-games" className={`text-tv_text font-medium`}>
          Past Games
        </Link>
      </div>

      <div className="hidden md:flex justify-center items-center gap-3">
        <Link href="/login" className={` text-[#468B64] border border-[#468B64] px-8 py-2 rounded-full font-medium cursor-pointer hover:underline`}>
          Sign in
        </Link>
        <Link href="/register" className={`text-white bg-[#468B64] font-medium px-8 py-2 rounded-full`}>
          Register
        </Link>
      </div>

      <div className="md:hidden flex">
        <div onClick={() => setIsMenu(!isMenu)}>
          <MenuIcon className={`fill-[#004E44]`} size="lg" />
        </div>

        {/* MOBILE NAVBAR */}
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 h-[400px] w-full fixed left-0 top-0 bg-white"
          >
            <div className="w-full flex justify-between items-center">
                <div className="w-20 h-10 overflow-hidden">
                    <Image width={40} height={20} src={Logo} alt="golf_together_logo" className="w-full h-full object-cover"/>
                </div>
                <div onClick={() => setIsMenu(!isMenu)}>
                    <MenuIcon className="fill-[#004E44]" size="lg" />
                </div>
            </div>

            <div className="flex flex-col text-[1.3em] justify-center items-center gap-2 w-full">
              <Link href="/" className="text-green-800 font-medium">Live Games</Link>
              <Link href="/past-games" className="text-green-800 font-medium">Past Games</Link>
            </div>

            <div className="flex-col text-[1.3em] mt-10 flex justify-center items-center gap-2">
              <Link href="/login" className="text-green-800 font-medium cursor-pointer hover:underline">Sign in</Link>
              <Link href="/register" className="text-white bg-[#004E44] font-medium px-8 py-2 rounded-full">Register</Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header;
