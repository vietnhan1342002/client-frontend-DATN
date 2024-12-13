/* eslint-disable @next/next/no-img-element */
'use client';
import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedService } from '@/redux/store/serviceSlice';

export default function Banner() {
    const serviceData = useSelector((state: RootState) => state.services.services);
    const doctorData = useSelector((state: RootState) => state.doctors.doctors);

    const dispatch = useDispatch();

    const [selectedService, setSelectedService] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedService(selectedValue);
        dispatch(updateSelectedService(selectedValue));
    };

    const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedDoctor(selectedValue);
    };

    return (
        <section className="relative h-[80vh]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/banner.jpg"
                    alt="Doctor"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay Content */}
            <div className="relative z-8 max-w-7xl mx-auto h-full flex items-center px-4">
                {/* Form Section */}
                <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <div className="bg-blue-900 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold text-white text-center mb-4">Book an Appointment</h2>

                        <form className="space-y-3 text-base">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-white text-sm">Name <span className="text-white">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block text-white text-sm">Gender <span className="text-white">*</span></label>
                                    <select
                                        id="gender"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-white text-sm">Email <span className="text-white">*</span></label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-white text-sm">Phone <span className="text-white">*</span></label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Service Dropdown */}
                                <div>
                                    <label htmlFor="department" className="block text-white text-sm">Service <span className="text-white">*</span></label>
                                    <select
                                        id="department"
                                        value={selectedService || ''}
                                        onChange={handleServiceChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    >
                                        <option value="">Select a Service</option>
                                        {serviceData.map((service) => (
                                            <option key={service._id} value={service._id}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="doctor" className="block text-white text-sm">Doctor <span className="text-white">*</span></label>
                                    <select
                                        id="doctor"
                                        value={selectedDoctor || ''}
                                        onChange={handleDoctorChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    >
                                        <option value="">Select a Doctor</option>
                                        {doctorData.map((doctor) => (
                                            <option key={doctor._id} value={doctor._id}>
                                                {doctor.userId.fullName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="date" className="block text-white text-sm">Date <span className="text-white">*</span></label>
                                    <input
                                        id="date"
                                        type="date"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-white text-sm">Time <span className="text-white">*</span></label>
                                    <input
                                        id="time"
                                        type="time"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white text-sm">Note</label>
                                <textarea
                                    id="message"
                                    placeholder="Any special instructions"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 w-full bg-white text-blue-900 text-xl font-bold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
