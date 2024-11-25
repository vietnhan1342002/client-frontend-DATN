'use client';

import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
    const contacts = [
        {
            icon: <FaPhone />,
            title: 'PHONE',
            description: '0123456789',

        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'LOCATION',
            description: '123 VO CHI CONG',

        },
        {
            icon: <FaEnvelope />,
            title: 'EMAIL',
            description: 'abc@gmail.com',

        },
        {
            icon: <FaClock />,
            title: 'WORKING HOURS',
            description: (
                <>
                    Mon-Sat 09:00-20:00 <br />
                    Sunday PHONE only
                </>
            ),

        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                    Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-6 rounded-lg shadow-lg bg-blue-900 text-white hover:bg-gray-400 transition duration-300`}
                        >
                            <div className="text-4xl mb-4">{contact.icon}</div>
                            <h3 className="text-xl font-semibold text-center">{contact.title}</h3>
                            <p className="text-center text-sm mt-2">{contact.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
