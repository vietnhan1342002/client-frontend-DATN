'use client';

import { FaStethoscope, FaProcedures, FaChild, FaTooth, FaHeartbeat, FaEye, FaFileMedical, FaXRay } from 'react-icons/fa';

export default function Service() {
    const services = [
        { name: "Khám sức khỏe tổng quát", icon: <FaStethoscope /> },
        { name: "Khám trẻ em", icon: <FaChild /> },
        { name: "Khám phụ khoa", icon: <FaProcedures /> },
        { name: "Khám răng miệng", icon: <FaTooth /> },
        { name: "Khám và điều trị mụn", icon: <FaHeartbeat /> },
        { name: "Khám mắt", icon: <FaEye /> },
        { name: "Khám tai, mũi, họng", icon: <FaFileMedical /> },
        { name: "Xét nghiệm máu", icon: <FaStethoscope /> },
        { name: "X-quang", icon: <FaXRay /> },
    ];

    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                Our Services
            </h2>
            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
                {services.map((service) => (
                    <a key={service.name} href="#" className="bg-blue-900 hover:bg-gray-400 text-white text-center p-6 rounded-lg shadow-md cursor-pointer transition duration-300 flex flex-col items-center justify-center h-32 w-full">
                        <div className="text-4xl">{service.icon}</div>
                        <h2 className="text-lg font-semibold mt-2">{service.name}</h2>
                    </a>
                ))}
            </div>
        </div>
    );
}
