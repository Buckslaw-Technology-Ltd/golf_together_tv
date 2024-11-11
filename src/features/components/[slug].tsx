'use client'
import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { EventData } from './LiveGames';
import { GolfBG, ClockIcon, LocationIcon2, CalendarIcon2 } from '@/assets/icons';

const Watch: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isMaximized, setIsMaximized] = useState(false);

    const rawLink = String(searchParams.get('link'));
    const embedLink = rawLink.includes('youtube.com/watch')
        ? rawLink.replace('watch?v=', 'embed/')
        : rawLink;

    const eventData: EventData = {
        image: String(searchParams.get('image')),
        event: String(searchParams.get('event')),
        timeStart: String(searchParams.get('timeStart')),
        timeStop: String(searchParams.get('timeStop')),
        link: embedLink,
        date: String(searchParams.get('date')),
        location: String(searchParams.get('location')),
    };

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div className={`flex h-screen ${isMaximized ? 'flex-col' : 'flex-row'}`}>
            <div className={`w-full ${isMaximized ? 'h-full' : 'h-[50vh] md:h-full md:w-[50%]'}`}>
                <iframe
                    src={eventData.link}
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className={`w-full ${isMaximized ? 'h-[50vh]' : 'h-[50vh] md:h-full md:w-[50%]'} bg-white p-4 overflow-y-auto`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{eventData.event}</h2>
                    <button
                        onClick={toggleMaximize}
                        className="bg-[#468B64] hover:bg-[#004E44] text-white py-2 px-4 rounded-full"
                    >
                        {isMaximized ? 'Minimize' : 'Maximize'}
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <ClockIcon size="xs" />
                        <span className="font-bold">{eventData.timeStart} - {eventData.timeStop}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LocationIcon2 size="xs" />
                        <span className="font-bold">{eventData.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon2 size="xs" />
                        <span className="font-bold">{eventData.date}</span>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                    {/* Live chat implementation goes here */}
                </div>
            </div>
        </div>
    );
};


export default Watch;