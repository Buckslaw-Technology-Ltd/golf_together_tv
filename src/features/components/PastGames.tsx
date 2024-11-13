'use client'
import React from 'react';
import "@/app/globals.css";
import { GolfBG, ClockIcon, LocationIcon2 } from '@/assets/icons';
import HeroCard from '@/assets/images/heroCard.jpeg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface EventData {
    image: string;
    event: string;
    timeStart: string;
    timeStop: string;
    link: string;
    date: string;
    location: string;
}

const PastGames: React.FC = () => {
    const router = useRouter();

    const eventData: EventData[] = [
        {
            image: "/assets/images/heroCard.jpeg",
            event: "1st Nigeria Ladies Professional Golf Tournament",
            timeStart: "14:00",
            timeStop: "17:00",
            link: "https://youtu.be/UPH_bWqL5jo?si=L1Pjczw3Ti9xAcL4",
            date: "November 23, 2024",
            location: "Ibadan Golf Club",
        },
        {
            image: "/assets/images/heroCard.jpeg",
            event: "Children Golf Championship",
            timeStart: "14:00",
            timeStop: "17:00",
            link: "https://youtu.be/UGB0D-88WRY?si=9QWXkAkKF5tuHL81",
            date: "December 10, 2024",
            location: "Ikoyi Golf Club",
        },
        {
            image: "/assets/images/heroCard.jpeg",
            event: "World Golf Championship",
            timeStart: "14:00",
            timeStop: "17:00",
            link: "https://youtu.be/mmtj5DurYBU?si=TyXRQ4A-grJPmDdi",
            date: "December 20, 2024",
            location: "Ikeja Golf Club",
        },
        {
            image: "/assets/images/heroCard.jpeg",
            event: "1st Nigeria Ladies Professional Golf Tournament",
            timeStart: "14:00",
            timeStop: "17:00",
            link: "https://youtu.be/UPH_bWqL5jo?si=L1Pjczw3Ti9xAcL4",
            date: "November 23, 2024",
            location: "Ibadan Golf Club",
        },
        {
            image: "/assets/images/heroCard.jpeg",
            event: "Children Golf Championship",
            timeStart: "14:00",
            timeStop: "17:00",
            link: "https://youtu.be/UGB0D-88WRY?si=9QWXkAkKF5tuHL81",
            date: "December 10, 2024",
            location: "Ikoyi Golf Club",
        },
        {
            image: "/assets/images/heroCard.jpeg",
            event: "World Golf Championship",
            timeStart: "14:00",
            timeStop: "17:00",
            link: "https://youtu.be/mmtj5DurYBU?si=TyXRQ4A-grJPmDdi",
            date: "December 20, 2024",
            location: "Ikeja Golf Club",
        },
    ];

    const handleWatchNow = (event: EventData) => {
        router.push(`/watch?${new URLSearchParams(event as unknown as Record<string, string>).toString()}`);
    }

    return (
        <div className='w-full relative bg-[#F9F8F1] h-full overflow-hidden'>
            <div className='absolute w-full z-0 -top-20 left-0'>
                <GolfBG className='w-auto h-[800px]' />
            </div>

            <div className='relative z-10 p-4 lg:p-10 w-full h-full flex flex-col gap-3 md:gap-5 justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                    <h1 className="w-full text-center text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] syne leading-[2.8rem] md:leading-[3.2rem] text-gray-700 font-bold">
                        PAST GAMES
                    </h1>

                    <div className='mx-auto w-[95%] md:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                        {eventData.map((event, index) => (
                            <div key={index} className="w-full h-[400px]rounded-2xl p-2 bg-tv_bg overflow-hidden flex flex-col gap-2 md:gap-3">
                                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                                    <Image
                                        width={200}
                                        height={200}
                                        src={HeroCard}
                                        alt={event.event}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col w-full gap-2">
                                    <h2 className="text-[.9em] text-[#333333] syne font-bold">{event.event}</h2>

                                    <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
                                        <div className="flex items-center gap-1 ml-1 lg:ml-0">
                                            <ClockIcon size="xs" className="lg:mt-1" />
                                            <span className="text-[#333333] font-bold text-[.7em] mt-1">{event.timeStart}-{event.timeStop}</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <LocationIcon2 size="xs" className="lg:mt-1" />
                                            <span className="text-[#333333] font-bold text-[.7em] mt-1">{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex cursor-pointer mt-auto">
                                    <button
                                        onClick={() => handleWatchNow(event)}
                                        className="w-full text-white text-[.9em] text-center bg-[#468B64] hover:bg-[#004E44] duration-200 ease-in-out cursor-pointer font-medium px-8 py-2 rounded-full"
                                    >
                                        Watch now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastGames;