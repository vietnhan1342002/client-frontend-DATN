'use client';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function ChatBox() {
    const [isChatboxVisible, setChatboxVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot'; content: string }[]>([]);
    const [dateList, setDateList] = useState<string[]>([]);
    const [shiftList, setShiftList] = useState<string[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const toggleChatbox = () => {
        setChatboxVisible(!isChatboxVisible);
    };

    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);
    useEffect(() => {
        console.log("Updated shiftList:", shiftList);
    }, [shiftList]);


    const handleSendMessage = async () => {
        setMessage('');
        if (message.trim()) {
            setChatHistory((prev) => [...prev, { type: 'user', content: message }]);
            const botResponse = await fetchMessage(message);

            if (botResponse) {
                setChatHistory((prev) => [...prev, { type: 'bot', content: botResponse.message }]);
                if (botResponse.dateList?.length) {
                    setDateList(botResponse.dateList);
                }
                if (botResponse.shiftList?.length) {
                    setShiftList(botResponse.shiftList);
                }
            }
        }
    };

    const handleDateSelection = async (selectedDate: string) => {
        setChatHistory((prev) => [
            ...prev,
            { type: 'user', content: `${selectedDate}` },
        ]);
        const botResponse = await fetchMessage(selectedDate);
        if (botResponse) {
            setShiftList(botResponse.shiftList)
            setChatHistory((prev) => [
                ...prev,
                { type: 'bot', content: botResponse.message },
            ]);
        }
        setDateList([]);
    };

    const handleShiftSelection = async (selectedShift: string) => {
        setChatHistory((prev) => [
            ...prev,
            { type: 'user', content: `${selectedShift}` },
        ]);
        const botResponse = await fetchMessage(selectedShift);
        if (botResponse) {
            setChatHistory((prev) => [
                ...prev,
                { type: 'bot', content: botResponse.message },
            ]);
        }
        setShiftList([]);
    };

    const fetchMessage = async (message: string): Promise<{ message: string; dateList: string[], shiftList: string[] }> => {
        try {
            const response = await axios.post(
                'https://13.211.141.240.nip.io/api/v1/chat/message',
                // 'http://localhost:8080/api/v1/chat/message',
                { message }
            );
            const data = response.data.response;
            if (!data) {
                throw new Error("Invalid response from server.");
            }
            return {
                message: data.message || 'No message received.',
                dateList: data.dateList || [],
                shiftList: data.shiftList || []
            };
        } catch (err) {
            console.error('Error fetching message:', err);
            return { message: 'Sorry, something went wrong.', dateList: [], shiftList: [] };
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div>
            {/* Chat Icon */}
            <div className="fixed bottom-8 right-8">
                <button
                    onClick={toggleChatbox}
                    className={`bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-5 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 ${isChatboxVisible ? 'rotate-45' : ''}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8"
                    >
                        <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 22.1 95.2 60.16 131.1c-13.45 52.4-54.56 95.1-55.02 95.56C2.162 470.2 0 475.1 0 480c0 8.625 6.953 16 16 16c66.69 0 116.7-31.58 141.7-51.86C185.1 455.9 220.7 464 256 464c141.4 0 256-93.12 256-208S397.4 32 256 32zM380.1 285.2l-112 64C264.1 350.5 260 352 256 352s-8.125-1.469-12.12-2.844l-112-64C122.1 282.6 118.7 272.4 123.2 264.1s16.28-10.09 24.03-5.562L256 311.8l108.8-61.29c7.75-4.531 17.97-2.219 22.5 5.562S387.9 280.7 380.1 285.2z" />
                    </svg>
                </button>
            </div>

            {/* Chatbox */}
            {isChatboxVisible && (
                <div
                    className={`fixed bottom-24 right-8 bg-white w-[420px] h-[600px] border border-gray-300 shadow-2xl rounded-xl p-6 z-50 flex flex-col transition-all duration-500 transform ${isChatboxVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Chat with us</h3>
                        <button
                            onClick={toggleChatbox}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-4">
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-4 rounded-lg max-w-sm ${chat.type === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'} transition-transform duration-300`}>
                                    {chat.content}
                                </div>
                            </div>
                        ))}

                        {dateList.length > 0 && (
                            <div>
                                <p className="text-sm font-semibold text-gray-700">Select a date:</p>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {dateList.map((date, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleDateSelection(date)}
                                            className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-indigo-600 transition-colors"
                                        >
                                            {date}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {shiftList.length > 0 && (
                            <div>
                                <p className="text-sm font-semibold text-gray-700">Choose a shift:</p>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {shiftList.map((shift, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleShiftSelection(shift)}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-green-600 transition-colors"
                                        >
                                            {shift}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div ref={chatEndRef}></div>
                    </div>

                    <div className="flex items-center mt-4">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                            className="flex-1 border rounded-lg p-3 focus:ring focus:border-indigo-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-indigo-500 text-white px-4 py-2 ml-3 rounded-lg hover:bg-indigo-600 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
