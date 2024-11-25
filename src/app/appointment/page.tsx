/* eslint-disable @next/next/no-img-element */
'use client';

import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Appointment() {
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
                            <h2 className="text-3xl font-bold text-white text-center mb-6">Book an Appointment</h2>
                            <p className="text-white mb-6">
                                Please fill out the form below to book an appointment with one of our specialists.
                            </p>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="gender" className="block text-white">Gender</label>
                                        <select
                                            id="gender"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-white">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-white">Phone</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="(123) 456-7890"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-white">Date</label>
                                        <input
                                            id="date"
                                            type="date"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-white">Time</label>
                                        <input
                                            id="time"
                                            type="time"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="doctor" className="block text-white">Doctor</label>
                                        <select
                                            id="doctor"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="dr-smith">Dr. Smith</option>
                                            <option value="dr-jones">Dr. Jones</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="department" className="block text-white">Department</label>
                                        <select
                                            id="department"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="cardiology">Cardiology</option>
                                            <option value="neurology">Neurology</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-white">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Any special instructions"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-white text-blue-900 text-2xl font-bold py-3 px-6 rounded-lg hover:bg-gray-400 focus:outline-none"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Schedule Hours */}
                        <div className="bg-blue-900 text-white shadow-lg rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6">Schedule Hours</h2>
                            <div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4">
                                <div className="text-lg">Monday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">09:00 AM - 07:00 PM</div>

                                <div className="text-lg">Tuesday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">09:00 AM - 07:00 PM</div>

                                <div className="text-lg">Wednesday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">09:00 AM - 07:00 PM</div>

                                <div className="text-lg">Thursday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">09:00 AM - 07:00 PM</div>

                                <div className="text-lg">Friday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">09:00 AM - 07:00 PM</div>

                                <div className="text-lg">Saturday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">09:00 AM - 07:00 PM</div>

                                <div className="text-lg">Sunday</div>
                                <hr className="my-3 border-t border-white w-1/4 mx-auto" />
                                <div className="text-lg min-w-[180px] whitespace-nowrap">Closed</div>
                            </div>
                            <hr className="my-6 border-t border-white" />
                            <div className="mt-6 mb-4">
                                <h3 className="text-3xl font-semibold">Emergency</h3>
                                <p className="flex items-center text-2xl space-x-2 mt-2">
                                    <FaPhoneAlt className="mr-1" />
                                    <span>Call: 0123456789</span>
                                </p>
                                <p className="flex items-center text-2xl space-x-2 mt-2">
                                    <FaMapMarkerAlt className="mr-1" />
                                    <span>Location: 123 Vo Chi Cong</span>
                                </p>
                                <p className="flex items-center text-2xl space-x-2 mt-2">
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
