import React from 'react'
import Link from "next/link";
import { FbIcon, InstagramIcon, TiktokIcon, XIcon } from '@/assets/icons';
import Image from 'next/image';
import Logo from "@/assets/images/golf-tv-logo.png";

const Footer:React.FC = () => {
    const currentDate = new Date().getFullYear();

    return (
        <div className='p-4 md:p-8 lg:p-12 bg-[#EDF3F0] flex flex-col gap-4'>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 text-[#333333]'>
                <div className='w-full'>
                    <div>
                        <Link href="/">
                            <Image
                            width={92}
                            height={47}
                            src={Logo}
                            alt="golf_together_tv_logo"
                            />
                        </Link>
                    </div>
                </div>

                <div className='roman w-full flex flex-col gap-4'>
                    <h1 className='text-xl font-semibold'>Quick Links</h1>
                    <ul className='text-sm font-medium flex flex-col gap-2'>
                        <li className='cursor-pointer hover:underline'>Home</li>
                        <li className='cursor-pointer hover:underline'>About Us</li>
                        <li className='cursor-pointer hover:underline'>Tournament</li>
                        <li className='cursor-pointer hover:underline'>Players</li>
                        <li className='cursor-pointer hover:underline'>Past Games</li>
                    </ul>
                </div>

                <div className='roman w-full flex flex-col gap-4'>
                    <h1 className='text-xl font-semibold'>Other</h1>
                    <ul className='text-sm font-medium flex flex-col gap-2'>
                        <li className='cursor-pointer hover:underline'>FAQs</li>
                        <li className='cursor-pointer hover:underline'>Terms & Conditions</li>
                        <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                    </ul>
                </div>

                <div className='roman w-full flex flex-col gap-4'>
                    <h1 className='text-xl font-semibold'>Socials</h1>
                    <div className='w-full flex gap-5 items-center'>
                        <a href="https://www.instagram.com"><InstagramIcon/></a>
                        <a href="https://www.facebook.com"><FbIcon/></a>
                        <a href="https://twitter.com/Golf_Together"><XIcon/></a>
                        <a href="https://www.tiktok.com/@golftogether"><TiktokIcon/></a>
                    </div>
                </div>

            </div>

            <div className='roman w-full flex justify-center md:justify-end text-[.9em]'>
                &copy; {currentDate} Golf Together
            </div>
        </div>
    )
}

export default Footer