'use client'

import BannerDetail from "@/components/ui/bannerdetail";
import Footer from "@/components/ui/footer";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
    return (
        <div>
            {/* Banner Section */}
            <BannerDetail
                bannerImage="/banner.jpg"
                title="Contact"
                description="Get in touch with us for any inquiries or to book your next appointment. We're here to help!"
            />

            <div className="bg-white">

                <div className="max-w-screen-xl mx-auto px-4 py-12">
                    {/* Header Section */}
                    <h1 className="text-4xl font-semibold text-blue-900">Get In Touch</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        We&apos;d love to hear from you! Please fill out the form or contact us directly using the information below.
                    </p>

                    {/* Contact Form and Information */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side - Contact Form */}
                        <div className="bg-blue-900 p-8 shadow-lg rounded-lg text-white">
                            <h2 className="text-2xl font-bold mb-6">Contact</h2>
                            <form action="#" method="POST">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="subject" className="block">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md">
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Contact Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="bg-blue-100 p-6 rounded-lg text-center text-blue-900 flex flex-col items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300">
                                <FaPhoneAlt className="text-3xl mb-2" />
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p className="text-lg">0123456789</p>
                            </div>

                            {/* Location */}
                            <div className="bg-blue-100 p-6 rounded-lg text-center text-blue-900 flex flex-col items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300">
                                <FaMapMarkerAlt className="text-3xl mb-2" />
                                <h3 className="text-xl font-semibold">Location</h3>
                                <p className="text-lg">123 Vo Chi Cong</p>
                            </div>

                            {/* Email */}
                            <div className="bg-blue-100 p-6 rounded-lg text-center text-blue-900 flex flex-col items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300">
                                <FaEnvelope className="text-3xl mb-2" />
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p className="text-lg">abc@gmail.com</p>
                            </div>

                            {/* Working Hours */}
                            <div className="bg-blue-100 p-6 rounded-lg text-center text-blue-900 flex flex-col items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300">
                                <FaClock className="text-3xl mb-2" />
                                <h3 className="text-xl font-semibold">Working Hours</h3>
                                <p className="text-lg">Mon-Sat 08:00 - 20:00</p>
                                <p className="text-lg">Sunday Phone Only</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
