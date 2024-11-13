'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import YouTube from 'react-youtube';
import { EventData } from './LiveGames';
import { ScrollArea } from '@/components/ui/scrollArea';
import { ChevronLeft, ArrowUp } from 'lucide-react';
import { SendIcon } from '@/assets/icons';

type ChatMessage = {
    senderId: number;
    message: string;
    image?: string;
};

const Watch: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isMaximized, setIsMaximized] = useState(false);

    const extractVideoId = (url: string) => {
        const videoIdMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&]+)/);
        return videoIdMatch ? videoIdMatch[1] : null;
    };

    const rawLink = String(searchParams.get('link'));
    const videoId = extractVideoId(rawLink);

    const eventData: EventData = {
        image: String(searchParams.get('image')),
        event: String(searchParams.get('event')),
        timeStart: String(searchParams.get('timeStart')),
        timeStop: String(searchParams.get('timeStop')),
        link: rawLink,
        date: String(searchParams.get('date')),
        location: String(searchParams.get('location')),
    };

    const videoOpts = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    // LIVE CHAT FUNCTIONS ------
    
    const chatRooms = [
        { id: 1, name: 'Chat Room' },
    ];

    const bottomRef = useRef<HTMLDivElement | null>(null);
    const [message, setMessage] = useState<string>('');
    const [selectedChatRoom, setSelectedChatRoom] = useState(chatRooms[0] || null);
    const currentUser = { id: 1, name: 'Client', image: 'https://randomuser.me/api/portraits/men/5.jpg' };

    const [roomMessages, setRoomMessages] = useState<Record<number, ChatMessage[]>>({
        1: [
          { senderId: 2, image: 'https://randomuser.me/api/portraits/men/3.jpg', message: "Can’t believe the shots we’re seeing today! Who else thinks this is the best tournament yet?" },
          { senderId: 3, image: 'https://randomuser.me/api/portraits/women/2.jpg', message: "Watching from Lagos, Nigeria! Where’s everyone else tuning in from? 🏌️‍♂️🌍" },
          { senderId: 2, image: 'https://randomuser.me/api/portraits/men/7.jpg', message: "That last putt was nerve-wracking! I literally held my breath! Did anyone else? 😅" },
          { senderId: 2, image: 'https://randomuser.me/api/portraits/women/7.jpg', message: "The course looks so challenging today! These players are giving it their all." },
          { senderId: 2, image: 'https://randomuser.me/api/portraits/men/9.jpg', message: "Counting down to the final hole. Who’s ready to see [Player Name] lift that trophy? 🏆" },
          { senderId: 2, image: 'https://randomuser.me/api/portraits/men/2.jpg', message: "Wasn’t that approach shot by [Player Name] insane?! Definitely one for the highlight reel!" },
        ],
    });

    const sendMessage = () => {
        if (message.trim() && selectedChatRoom) {
          const newMessage = { senderId: currentUser.id, message };
          setRoomMessages((prevMessages) => ({
            ...prevMessages,
            [selectedChatRoom.id]: [...prevMessages[selectedChatRoom.id], newMessage],
          }));
          setMessage('');
        }
    };

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [message]);

    return (
        <div className={`w-full flex h-full flex-col py-3 md:py-6 px-2`}>
            <div className="flex gap-2 items-center px-2">
                <div onClick={()=>router.push('/')} className='cursor-pointer'>
                    <ChevronLeft className='w-6 h-6 md:w-10 md:h-10 text-tv_text'/>
                </div>
                <h2 className="text-[.8em] sm:text-lg syne font-semibold text-tv_text">{eventData.event}</h2>
            </div>

            <div className='w-full h-full flex flex-col sm:flex-row gap-4 p-2'>
                <div className={`w-full md:w-[60%] lg:w-[70%] h-[250px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden`}>
                    {videoId && (
                        <YouTube
                            videoId={videoId}
                            opts={videoOpts}
                            className="w-full h-full bg-black"
                        />
                        )
                    }
                </div>

                <div className={`w-full md:w-[40%] lg:w-[30%] sm:h-[400px] lg:h-[500px] p-4 overflow-hidden flex flex-col border-2 border-gray-300 rounded-2xl bg-gray-200`}>
                    <div className='h-[5%] w-full syne text-lg font-bold text-tv_text'>
                        <span>Live Chat</span>
                    </div>

                    <ScrollArea className="h-[calc(100%-45px)]">
                        <div className="w-full flex flex-col overflow-y-auto py-3 space-y-2">
                            {roomMessages[selectedChatRoom.id]?.map((chat, index) => (
                                <div 
                                key={index} 
                                className={`w-full flex ${chat.senderId === currentUser.id ? 'justify-end' : 'justify-start'} overflow-hidden`}
                                >
                                    {chat.senderId === currentUser.id ? (
                                        <div className='w-full flex items-start justify-start gap-3'>
                                            <div className='w-[10%] rounded-full overflow-hidden'>
                                                <img src={currentUser.image} alt='User' className='w-8 h-8 object-cover'/>
                                            </div>
                                            <div className='w-[90%] rounded-xl text-[.6em] sm:text-[.7em]'>
                                                "{chat.message}"
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='w-full flex items-start justify-start gap-3'>
                                            <div className='w-[10%] rounded-full overflow-hidden'>
                                                <img src={chat.image} alt='User' className='w-8 h-8 object-cover'/>
                                            </div>
                                            <div className='w-[90%] rounded-xl text-[.6em] sm:text-[.7em]'>
                                                "{chat.message}"
                                            </div>
                                        </div>
                                    )}
                                    {/* <div ref={bottomRef} /> */}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="w-full h-[10%] border rounded-full bg-white p-2 flex items-center overflow-hidden">
                        <input
                            type="text"
                            placeholder="Write your message"
                            className="w-full sm:flex-1 bg-transparent outline-none py-1 px-2 sm:px-4 text-[.7em] border-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button onClick={sendMessage} className="p-2">
                            <SendIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;
