/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setDepartments } from '@/redux/store/departmentSlice';

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { departments, loading } = useSelector((state: RootState) => state.departments); // Access state from Redux store
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const fetchDepartments = async () => {
    //     dispatch(setLoading(true));
    //     try {
    //         const response = await axios.get('http://13.211.141.240:8080/api/v1/departments');
    //         console.log("API Response:", response.data);
    //         dispatch(setDepartments(response.data));
    //     } catch (error) {
    //         console.error("Error fetching departments:", error);
    //     } finally {
    //         dispatch(setLoading(false));
    //     }
    // };


    // useEffect(() => {
    //     fetchDepartments(); // Fetch departments when the component mounts

    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
    //             setDropdownOpen(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, [fetchDepartments]); // Empty dependency array ensures it only runs on component mount

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (departments.length === 0) {
            const fetchDepartments = async () => {
                try {
                    const response = await axios.get("http://13.211.141.240:8080/api/v1/departments");
                    console.log('API Response:', response.data);

                    const departmentsData = response.data.result || [];

                    departmentsData.forEach((department: { departmentName: string }) => {
                        console.log('Department Name:', department.departmentName);
                    });

                    dispatch(setDepartments(departmentsData));
                } catch (error) {
                    console.error("Error fetching departments:", error);
                }
            };

            fetchDepartments();
        }
    }, [dispatch, departments.length]);


    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Xử lý logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        // Xử lý thêm nếu cần, ví dụ: xóa token, chuyển hướng
        console.log('User logged out');
    };

    return (
        <header className="bg-white border-b">


            {/* Main Navbar */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                            <Link href="/" passHref>
                                <button className="flex items-center space-x-2 bg-transparent border-none cursor-pointer">
                                    <img src="/logo.png" alt="ZCARE Logo" className="h-8 w-8 object-contain" />
                                    <h1 className="text-xl font-bold">ZCARE</h1>
                                </button>
                            </Link>
                        </div>

                        {/* Contact Info below Logo (horizontal layout)
                        <div className="flex items-center space-x-2 mt-2 text-sm">
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-blue-500 w-5 h-5" />
                                <p>0123456789</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-blue-500 w-5 h-5" />
                                <p>09:00 - 20:00 Everyday</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500 w-5 h-5" />
                                <p>123 VO CHI CONG</p>
                            </div>
                        </div> */}
                    </div>


                    {/* Navigation */}
                    <nav className="flex gap-8 justify-center">

                        {/* Dropdown for Departments */}
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
                                    {loading ? (
                                        <p className="block px-4 py-2 text-gray-400">Loading specialties...</p>
                                    ) : departments.length > 0 ? (
                                        <>
                                            {departments.map((department) => {
                                                // Log each department's name
                                                console.log('Department Name:', department.departmentName);

                                                return (
                                                    <a
                                                        key={department._id}
                                                        href={`/specialty/${department._id}`}
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {department.departmentName}
                                                    </a>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <p className="block px-4 py-2 text-gray-400">No departments available</p>
                                    )}
                                </div>
                            )}
                        </div>

                        <a href="/doctor" className="hover:underline">Doctors</a>
                        <a href="#news" className="hover:underline">News</a>
                        <a href="/about" className="hover:underline">About us</a>
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



                        {/* Login / User Icon */}
                        <div className="flex items-center gap-4">
                            {isLoggedIn ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center gap-2 bg-blue-200 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400"
                                    >
                                        <FaUserCircle className="w-5 h-5" />
                                        Profile
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute right-0 bg-white text-black shadow-lg mt-2 py-2 rounded-md w-48 z-10">
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 bg-blue-200 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400"
                                >
                                    <FaSignInAlt className="w-5 h-5" />
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
