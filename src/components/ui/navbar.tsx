'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaSignInAlt, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';  // Thêm các icon hamburger và đóng
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setDepartments } from '@/redux/store/departmentSlice';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { departments, loading } = useSelector((state: RootState) => state.departments);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSpecialtyDropdownOpen, setSpecialtyDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [selectedDepartmentId, setSelectedDepartmentId] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // State cho mobile menu

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const profileDropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleSpecialtyDropdown = () => setSpecialtyDropdownOpen(!isSpecialtyDropdownOpen);
    const toggleProfileDropdown = () => setProfileDropdownOpen(!isProfileDropdownOpen);

    const handleCloseDropdown = () => {
        setProfileDropdownOpen(false);
    };

    useEffect(() => {
        const checkLoginStatus = () => {
            const accessToken = localStorage.getItem('accessToken');
            setIsLoggedIn(!!accessToken);
        };

        checkLoginStatus();

        const handleStorageChange = () => {
            console.log('Local Storage changed!');
            checkLoginStatus();
        };

        window.addEventListener('storage', handleStorageChange);

        const interval = setInterval(checkLoginStatus, 1000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (departments.length === 0) {
            fetchDepartments();
        }
    }, [dispatch, departments.length]);

    const handleDepartmentSelect = (id: string) => {
        setSelectedDepartmentId(id);
        setSpecialtyDropdownOpen(false);
        router.push(`/service/${id}`);
    };

    const fetchDepartments = async () => {
        try {
            const response = await axios.get("https://13.211.141.240.nip.io/api/v1/departments");
            const departmentsData = response.data.result || [];
            dispatch(setDepartments(departmentsData));
        } catch (error) {
            console.error("Error fetching departments:", error);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('patientId');
        window.location.reload();
        router.push('/');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setSpecialtyDropdownOpen(false);
            }
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
                setProfileDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white border-b">
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                            <Link href="/" passHref>
                                <button className="flex items-center space-x-2 bg-transparent border-none cursor-pointer">
                                    <img src="/logo.png" alt="ZCARE Logo" className="h-8 w-8 object-contain" />
                                    <h1 className="text-xl font-bold">ZCARE</h1>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <nav className="hidden md:flex gap-8 justify-center">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleSpecialtyDropdown}
                                className="hover:underline flex items-center"
                            >
                                Specialty
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${isSpecialtyDropdownOpen ? 'rotate-180' : ''
                                        }`}
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

                            {isSpecialtyDropdownOpen && (
                                <div className="absolute bg-white text-black shadow-lg mt-2 py-2 rounded-md w-48 z-10">
                                    {loading ? (
                                        <p className="block px-4 py-2 text-gray-400">Loading specialties...</p>
                                    ) : departments.length > 0 ? (
                                        departments.map((department) => (
                                            <button
                                                key={department._id}
                                                onClick={() => handleDepartmentSelect(department._id)}
                                                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                                            >
                                                {department.departmentName}
                                            </button>
                                        ))
                                    ) : (
                                        <p className="block px-4 py-2 text-gray-400">No departments available</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <a href="/doctor" className="hover:underline">Doctors</a>
                        <a href="/about" className="hover:underline">About us</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                            {isLoggedIn ? (
                                <div className="relative" ref={profileDropdownRef}>
                                    <button
                                        onClick={toggleProfileDropdown}
                                        className="flex items-center gap-2 bg-blue-200 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400"
                                    >
                                        <FaUserCircle className="w-5 h-5" />
                                        Profile
                                    </button>
                                    {isProfileDropdownOpen && (
                                        <div className="absolute right-0 bg-white text-black shadow-lg mt-2 py-2 rounded-md w-48 z-10">
                                            <Link href="/profile" className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleCloseDropdown}>
                                                Edit Profile
                                            </Link>
                                            <Link href="/medicalrecords" className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleCloseDropdown}>
                                                Medical Records
                                            </Link>
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

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-900 text-white p-4">
                    <div className="flex flex-col gap-4">
                        <a href="/doctor" className="hover:underline">Doctors</a>
                        <a href="/about" className="hover:underline">About us</a>
                        <div className="relative">
                            <button
                                onClick={toggleSpecialtyDropdown}
                                className="flex items-center"
                            >
                                Specialty
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${isSpecialtyDropdownOpen ? 'rotate-180' : ''}`}
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

                            {isSpecialtyDropdownOpen && (
                                <div className="absolute bg-white text-black shadow-lg mt-2 py-2 rounded-md w-48 z-10">
                                    {loading ? (
                                        <p className="block px-4 py-2 text-gray-400">Loading specialties...</p>
                                    ) : departments.length > 0 ? (
                                        departments.map((department) => (
                                            <button
                                                key={department._id}
                                                onClick={() => handleDepartmentSelect(department._id)}
                                                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                                            >
                                                {department.departmentName}
                                            </button>
                                        ))
                                    ) : (
                                        <p className="block px-4 py-2 text-gray-400">No departments available</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
