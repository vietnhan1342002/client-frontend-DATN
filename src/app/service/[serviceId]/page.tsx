/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

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

const ServiceDetail = ({ params }: { params: { serviceId: string } }) => {
    const [serviceData, setServiceData] = useState<Service[]>([]);

    const initialData = {
        _id: "",
        name: "",
        description: {
            introduction: "",
            qualifications: [],
            relatedDiseases: []
        },
        departmentId: {
            departmentName: ""
        }
    }

    const initialDoctor = [{
        _id: '',
        userId: {
            fullName: ''
        },
        licenseNumber: '',
        yearsOfExperience: 0
    }]

    const [serviceDetailData, setServiceDetailData] = useState(initialData)
    const [doctorDetail, setDoctorDetail] = useState(initialDoctor)


    const departmentId = params.serviceId;

    const fetchServiceData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/filter/specialties?departmentId=${departmentId}`); // Adjust API endpoint
            setServiceData(response.data)
            if (response.data && response.data.length > 0) {
                handleSelectService(response.data[0]._id); // Mặc định chọn dịch vụ thứ 2
            }
        } catch (err) {
            toast.error('Error fetching service data')
            console.error('Error fetching service data:', err);
        }
    };


    useEffect(() => {
        fetchServiceData();
    }, []);

    // Hàm để xử lý sự kiện khi người dùng chọn hoặc bỏ chọn dịch vụ
    const handleSelectService = async (serviceId: string) => {
        const response = await axios.get(`http://localhost:8080/api/v1/specialties/${serviceId}`);
        const doctor = await axios.get(`http://localhost:8080/api/v1/filter/specialties/doctors?specialtyId=${serviceId}`)
        const serviceDetail = response.data;
        const doctors = doctor.data
        console.log(doctors);
        setDoctorDetail(doctors)
        setServiceDetailData(serviceDetail)
    };


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
                                <button
                                    key={service._id}
                                    onClick={() => handleSelectService(service._id)}
                                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                                >
                                    {service.name}
                                </button>
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
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">{serviceDetailData.name}</h2>

                    {/* Description */}
                    <h3 className="text-lg text-gray-800 mb-6">{serviceDetailData.description.introduction}</h3>

                    {/* Qualifications */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold text-gray-900">Qualifications</h4>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            {serviceDetailData.description.qualifications.map((qualification, index) => (
                                <li key={index} className="text-lg">{qualification}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Related Diseases */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold text-gray-900">Related Diseases</h4>
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            {serviceDetailData.description.relatedDiseases.map((disease, index) => (
                                <li key={index} className="text-lg">{disease}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Doctor Information */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold text-gray-900">Doctor Information</h4>
                        <div className="space-y-4 mt-2">
                            {doctorDetail.map((doctor) => (
                                <div key={doctor._id} className="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
                                    <p className="text-lg font-semibold text-blue-800">{doctor.userId.fullName}</p>
                                    <p className="text-gray-600 text-md">License: <span className="font-medium">{doctor.licenseNumber}</span></p>
                                    <p className="text-gray-600 text-md">Experience: <span className="font-medium">{doctor.yearsOfExperience} years</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ServiceDetail;
