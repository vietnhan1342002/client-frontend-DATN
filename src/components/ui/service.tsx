'use client';

import { FaStethoscope, FaProcedures, FaChild, FaTooth, FaHeartbeat, FaEye, FaFileMedical, FaXRay } from 'react-icons/fa';

export default function Service() {
    const services = [
        { name: "General Health Check-up", icon: <FaStethoscope /> },
        { name: "Pediatric Check-up", icon: <FaChild /> },
        { name: "Gynecological Examination", icon: <FaProcedures /> },
        { name: "Dental Examination", icon: <FaTooth /> },
        { name: "Acne Treatment", icon: <FaHeartbeat /> },
        { name: "Eye Examination", icon: <FaEye /> },
        { name: "ENT (Ear, Nose, Throat) Examination", icon: <FaFileMedical /> },
        { name: "Blood Test", icon: <FaStethoscope /> },
        { name: "X-ray", icon: <FaXRay /> },
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
