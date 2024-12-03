/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the types for the API response
interface ServiceDescription {
    introduction: string;
    qualifications: string;
    relatedDiseases: string;
    doctors: string[];
    diseases: string[];
}

interface Service {
    _id: string;
    name: string;
    description: ServiceDescription;
}

const ServiceDetail = () => {
    // State to store fetched data
    const [serviceData, setServiceData] = useState<Service[]>([]);  // Use Service[] for array of services
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await axios.get('http://13.211.141.240:8080/api/v1/specialties'); // Adjust API endpoint
                setServiceData(response.data.result); // Store the fetched data
            } catch (err) {
                setError('Failed to load service data'); // Handle error
                console.error('Error fetching service data:', err);
            } finally {
                setLoading(false); // Set loading to false after data fetch is complete
            }
        };

        fetchServiceData();
    }, []);

    // Loading state
    if (loading) {
        return <div className="text-center text-xl font-semibold">Loading...</div>;
    }

    // Error state
    if (error) {
        return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 bg-white shadow-lg rounded-lg">
                    <div className="bg-blue-900 text-white text-lg font-semibold py-4 px-6">
                        Free Checkup
                    </div>
                    <ul className="py-4 px-6 space-y-4 text-gray-700">
                        {serviceData.map((service) => (
                            <li key={service._id} className="flex items-center gap-2">
                                <span className="text-blue-600"></span>
                                {service.name}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-full md:w-3/4 bg-white shadow-lg rounded-lg p-6 mx-auto">
                    {/* Image */}
                    <img
                        src="/banner.jpg" // You can replace this with service-specific images if available
                        alt="Doctor and patient"
                        className="w-full h-64 object-cover rounded-lg mb-6"
                        width={800}
                        height={400}
                    />

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">{serviceData[0]?.name}</h2>

                    {/* Description */}
                    <h3 className="text-lg text-black mb-4">{serviceData[0]?.description?.introduction}</h3>

                    {/* Doctors list */}
                    <section className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{serviceData[0]?.description?.qualifications}</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {serviceData[0]?.description?.doctors?.map((doctor, index) => (
                                <li key={index}>{doctor}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Diseases list */}
                    <section className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{serviceData[0]?.description?.relatedDiseases}</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {serviceData[0]?.description?.diseases?.map((disease, index) => (
                                <li key={index}>{disease}</li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ServiceDetail;
