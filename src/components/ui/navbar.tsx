/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-white border-b">
            {/* Top Navbar */}
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 text-sm text-gray-600">
                {/* Left Section */}
                <div className="text-blue-700 font-bold text-base">
                    PHÒNG KHÁM ĐA KHOA
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-20">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-blue-500 w-5 h-5" />
                        <div>
                            <p className="font-medium text-gray-800">PHONE</p>
                            <p>0123456789</p>
                        </div>
                    </div>

                    {/* Work Hour */}
                    <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500 w-5 h-5" />
                        <div>
                            <p className="font-medium text-gray-800">WORK HOUR</p>
                            <p>09:00 - 20:00 Everyday</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500 w-5 h-5" />
                        <div>
                            <p className="font-medium text-gray-800">LOCATION</p>
                            <p>123 VO CHI CONG</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="ZCARE Logo" className="h-8 w-8 object-contain" />
                        <h1 className="text-xl font-bold">ZCARE</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex gap-8 justify-center">
                        <a href="#home" className="hover:underline">Home</a>
                        <a href="#about" className="hover:underline">About us</a>

                        {/* Dropdown for Specialty */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="hover:underline flex items-center"
                            >
                                Specialty
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute bg-white text-black shadow-lg mt-2 py-2 rounded-md w-48 z-10">
                                    <a href="#internal" className="block px-4 py-2 hover:bg-gray-100">Nội Khoa</a>
                                    <a href="#surgery" className="block px-4 py-2 hover:bg-gray-100">Ngoại Khoa</a>
                                    <a href="#pediatrics" className="block px-4 py-2 hover:bg-gray-100">Nhi Khoa</a>
                                    <a href="#obstetrics" className="block px-4 py-2 hover:bg-gray-100">Sản Phụ Khoa</a>
                                    <a href="#dentistry" className="block px-4 py-2 hover:bg-gray-100">Răng Hàm Mặt</a>
                                    <a href="#dermatology" className="block px-4 py-2 hover:bg-gray-100">Da Liễu</a>
                                    <a href="#ophthalmology" className="block px-4 py-2 hover:bg-gray-100">Mắt</a>
                                    <a href="#ent" className="block px-4 py-2 hover:bg-gray-100">Tai Mũi Họng</a>
                                </div>
                            )}
                        </div>

                        <a href="#news" className="hover:underline">News</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </nav>

                    {/* Search Icon and Appointment Button */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon */}
                        <button className="text-white hover:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>

                        {/* Appointment Button */}

                        <Link href="/appointment" className="bg-blue-200 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400">
                            Book An Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
