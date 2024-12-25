/* eslint-disable @next/next/no-img-element */
'use client';

import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import axios from "axios";
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

    const fetchAppointment = async () => {
        try {
            const res = await axios.get("http://13.211.141.240:8080/api/v1/appointments/674ff4882f0e9bce9578b73f");
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
                        <div className="bg-blue-900 text-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-4">Schedule Hours</h2>
                            <div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4">
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => (
                                    <React.Fragment key={idx}>
                                        <div>{day}</div>
                                        <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                        <div>{day === "Sunday" ? "Closed" : "09:00 AM - 07:00 PM"}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                            <hr className="my-6 border-t border-white" />
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold">Emergency</h3>
                                <p className="flex items-center space-x-2 mt-2">
                                    <FaPhoneAlt className="mr-1" />
                                    <span>Call: 0123456789</span>
                                </p>
                                <p className="flex items-center space-x-2 mt-2">
                                    <FaMapMarkerAlt className="mr-1" />
                                    <span>Location: 123 Vo Chi Cong</span>
                                </p>
                                <p className="flex items-center space-x-2 mt-2">
                                    <FaEnvelope className="mr-1" />
                                    <span>Email: abc@gmail.com</span>
                                </p>
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
