'use client';

import PrivateRoute from '@/PrivateRouter';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function PatientProfile() {

    const patientId = localStorage.getItem('patientId')

    const initialData = {
        address: "",
        dateOfBirth: "",
        gender: "",
        userId: {
            fullName: "",
        },
    };

    const [formData, setFormData] = useState(initialData)
    const [submittedData, setSubmittedData] = useState(initialData)

    const fetchPatient = async (patientId: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/patients/${patientId}`);
            const patient = response.data;
            console.log('patient', patient);
            if (patient.dateOfBirth) {
                const formattedDate = patient.dateOfBirth.split('T')[0];
                patient.dateOfBirth = formattedDate;
                console.log('patient.dateOfBirth', patient.dateOfBirth);

            }
            setFormData(patient);
            setSubmittedData(patient);
        } catch (error) {
            toast.error('Error')
            console.error('Error fetching patient data:', error);
        }
    }

    useEffect(() => {
        if (patientId) {
            fetchPatient(patientId)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'fullName') {
            setSubmittedData(prev => ({
                ...prev,
                userId: {
                    ...prev.userId,
                    fullName: value,
                },
            }));
        } else if (name === 'dateOfBirth') {
            setSubmittedData(prev => ({
                ...prev,
                dateOfBirth: value,
            }));
        } else {
            setSubmittedData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const fetchUpdatePatient = async (patientId: string) => {
        try {
            const res = await axios.patch(`http://localhost:8080/api/v1/patients/${patientId}`, {
                patient: {
                    dateOfBirth: submittedData.dateOfBirth,
                    address: submittedData.address,
                    gender: submittedData.gender,
                },
                userAuth: {
                    fullName: submittedData.userId.fullName,
                }
            });
            fetchPatient(patientId);
            toast.success('Patient data updated');
        } catch (error) {
            toast.error('Error updating patient data');
            console.error('Error updating patient data:', error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submittedData', submittedData);
        if (patientId) {
            fetchUpdatePatient(patientId);
        }
    }

    return (
        <PrivateRoute>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    {/* Header */}
                    <div className="flex items-center justify-center border-b pb-4 mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Patient Profile</h1>
                    </div>

                    {/* Profile Content */}
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
                        {/* Avatar */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500">
                            <Image
                                src="/doctor-profile-1.jpg" // Đặt ảnh avatar trong public/
                                alt="Patient Avatar"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="md:ml-8 mt-6 md:mt-0">
                            <h2 className="text-xl font-semibold text-gray-700">{formData.userId.fullName || 'Nguyễn Văn A'}</h2>
                            <p className="text-gray-500 mt-2">
                                <strong>Date of birth:</strong> {new Date(formData.dateOfBirth).toLocaleDateString('en-GB') || '01/01/1990'}
                            </p>
                            <p className="text-gray-500 mt-2">
                                <strong>Gender:</strong> {formData.gender || 'Nam'}
                            </p>
                            <p className="text-gray-500 mt-2">
                                <strong>Address:</strong> {formData.address || '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM'}
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="flex flex-col">
                            <label htmlFor="fullName" className="mb-2 text-gray-700">
                                Full name
                            </label>
                            <input
                                name="fullName"
                                type="text"
                                onChange={handleChange}
                                value={submittedData.userId.fullName}
                                placeholder="Nguyễn Văn A"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="flex flex-col">
                            <label htmlFor="dateOfBirth" className="mb-2 text-gray-700">
                                Date of birth
                            </label>
                            <input
                                name="dateOfBirth"
                                type="date"
                                onChange={handleChange}
                                value={submittedData.dateOfBirth}
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label htmlFor="address" className="mb-2 text-gray-700">
                                Address
                            </label>
                            <input
                                name="address"
                                type="text"
                                onChange={handleChange}
                                value={submittedData.address}
                                placeholder="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PrivateRoute>
    );
}
