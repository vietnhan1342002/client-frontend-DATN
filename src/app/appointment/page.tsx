/* eslint-disable @next/next/no-img-element */
'use client';

import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Appointment() {
    const initialAppointment = {
        _id: '',
        patientId: {
            userId: {
                fullName: '',
                phoneNumber: '',
            },
        },
        doctorId: {
            userId: {
                fullName: '',
                _id: '',
            },
        },
        appointmentDate: '',
        status: '',
    };

    const [appointment, setAppointment] = useState(initialAppointment);
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const fetchAppointment = async () => {
        try {
            const res = await axios.get(`https://13.211.141.240.nip.io/api/v1/appointments/${id}`);
            setAppointment(res.data.result);
        } catch (error) {
            console.error("Failed to fetch appointment:", error);
        }
    };


    const [date, time] = appointment.appointmentDate.split(" ");



    useEffect(() => {
        fetchAppointment();
    }, []);

    return (
        <div>
            {/* Banner Section */}
            <BannerDetail
                bannerImage="/banner.jpg"
                title="Book An Appointment"
                description="Select your appointment and meet our specialists."
            />

            {/* Appointment Booking Form */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side - Appointment Form */}
                        <div className="bg-blue-900 shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white text-center mb-4">Book an Appointment</h2>
                            <p className="text-white text-base mb-6">
                                Please fill out the form below to book an appointment with one of our specialists.
                            </p>
                            <form className="space-y-4 text-base">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white text-sm">Name</label>
                                        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm">
                                            <strong>{appointment.patientId.userId.fullName || 'N/A'}</strong>
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-white text-sm">Phone</label>
                                        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm">
                                            <strong>{appointment.patientId.userId.phoneNumber || 'N/A'}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-white text-sm">Date</label>
                                        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm">
                                            <strong>{date || 'N/A'}</strong>
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-white text-sm">Time</label>
                                        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm">
                                            <strong>{time || 'N/A'}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="time" className="block text-white text-sm">Doctor</label>
                                        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm">
                                            <strong>{appointment.doctorId.userId.fullName || 'N/A'}</strong>
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-white text-sm">Status</label>
                                        <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm">
                                            <strong>{appointment.status || 'N/A'}</strong>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Right Side - Schedule Hours */}
                        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-xl rounded-lg p-8">
                            <h2 className="text-3xl font-extrabold mb-6 text-center">Schedule Hours</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-y-6 gap-x-4">
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className="font-medium">{day}</div>
                                        <div className="flex items-center justify-center">
                                            <hr className="border-t border-white w-2/3" />
                                        </div>
                                        <div className="font-semibold">{day === "Sunday" ? "Closed" : "09:00 AM - 07:00 PM"}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                            <hr className="my-8 border-t border-white/50" />
                            <div className="mt-6 space-y-4">
                                <h3 className="text-2xl font-semibold text-center">Emergency Contact</h3>
                                <div className="flex items-center space-x-4">
                                    <FaPhoneAlt className="text-xl" />
                                    <span className="text-lg">Call: <a href="tel:0123456789" className="underline">0123456789</a></span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaMapMarkerAlt className="text-xl" />
                                    <span className="text-lg">Location: <a href="https://goo.gl/maps/example" target="_blank" className="underline">123 Vo Chi Cong</a></span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaEnvelope className="text-xl" />
                                    <span className="text-lg">Email: <a href="mailto:abc@gmail.com" className="underline">abc@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}
