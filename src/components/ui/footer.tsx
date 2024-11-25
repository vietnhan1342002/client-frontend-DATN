'use client';

import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Left Section - Hospital Name and Slogan */}
                    <div>
                        <h2 className="text-3xl text-blue-100 font-bold mb-4">ZCARE</h2>
                        <p className="text-lg mb-4">
                            Leading the Way in Medical Excellence, Trusted Care.
                        </p>
                    </div>

                    {/* Second Section - Important Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/appointment" className="hover:text-blue-200">
                                    Appointment
                                </a>
                            </li>
                            <li>
                                <a href="/doctors" className="hover:text-blue-200">
                                    Doctors
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-blue-200">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/about-us" className="hover:text-blue-200">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Section - Contact Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>Call: 0123456789</li>
                            <li>Email: abc@gmail.com</li>
                            <li>Address: 123 VO CHI CONG</li>
                        </ul>
                    </div>

                    {/* Fourth Section - Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-4 py-2 rounded-l-lg w-full focus:outline-none"
                            />
                            <button className="bg-blue-100 text-blue-900 px-4 py-2 rounded-r-lg">
                                <FaLinkedinIn />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-blue-900 pt-6 mt-6 flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
