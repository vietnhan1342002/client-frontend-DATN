/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setDepartments, setLoading } from '@/redux/store/departmentSlice'; // Import your actions

export default function Specialty() {
    const dispatch = useDispatch();
    const { departments, loading } = useSelector((state: RootState) => state.departments); // Use selector to get state from Redux

    useEffect(() => {
        const fetchDepartments = async () => {
            dispatch(setLoading(true)); // Set loading to true before making the API call
            try {
                const response = await axios.get("http://localhost:8080/api/v1/departments");

                const departmentsData = response.data.result || [];
                // You can also access the description here if needed

                dispatch(setDepartments(departmentsData)); // Dispatch the departments to Redux
            } catch (error) {
                console.error("Error fetching departments:", error);
            } finally {
                dispatch(setLoading(false)); // Set loading to false after the API call is complete
            }
        };

        fetchDepartments(); // Fetch departments when the component mounts
    }, [dispatch]); // Empty dependency array ensures this runs only once

    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                    Our Departments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="bg-white shadow-lg rounded-lg p-6 max-h-[420px] overflow-y-auto">
                        <ul className="space-y-4">
                            {loading ? (
                                <li>Loading departments...</li>
                            ) : (
                                departments.map((department) => (
                                    <li key={department._id} className="flex items-center gap-3">
                                        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-900">
                                            {/* Text */}
                                            <span>{department.departmentName}</span>
                                        </a>
                                    </li>
                                ))
                            )}
                        </ul>

                        {/* View All Button */}
                        <button
                            type="submit"
                            className="mt-6 bg-blue-900 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-400"
                        >
                            View All
                        </button>
                    </div>

                    {/* Content */}
                    <div className="col-span-2 space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-900 mb-2">
                                Committed to comprehensive healthcare for you.
                            </h4>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
                                {[
                                    "Health is priceless",
                                    "Professional medical services",
                                    "Always dedicated to you",
                                    "The trust of the community",
                                    "Quality builds credibility",
                                    "Always by your side for better health",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="text-blue-500 mr-2">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600">
                            {departments.length > 0 ? departments[0].description : 'Loading description...'}
                        </p>

                        {/* Image Section */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/doctor-1.jpg"
                                alt="Doctors team"
                                className="rounded-lg shadow-lg w-full"
                            />
                            <img
                                src="/doctor-2.jpg"
                                alt="Medical team"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
