'use client';

import PrivateRoute from '@/PrivateRouter';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';


export default function MedicalRecordsPage() {
    const router = useRouter()
    const userName = "ABD"
    const [patientId, setPatientId] = useState('')
    const initialMedicalData = [{
        patientId: {
            userId: {
                fullName: ''
            }
        },
        doctorId: {
            userId: {
                fullName: ''
            }
        },
        appointmentId: {
            appointmentDate: ''
        },
        diagnosis: '',
        note: '',
    }]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const patientId = localStorage.getItem('patientId')
            if (patientId) {
                setPatientId(patientId)
            }
        }
    }, []);

    const [formData, setFormData] = useState<any[]>(initialMedicalData);

    const fetchMedicalrecord = async (patientId: string) => {
        try {
            const response = await axios.get(`http://13.211.141.240:8080/api/v1/filter/medical_records?patientId=${patientId}`)
            const medicalRecords = response.data;
            const extractedPatientId = medicalRecords.map((record: any) => record.patientId.userId.fullName);
            setFormData(medicalRecords)
        } catch (error: any) {
            toast.error(`Error`)
        }
    }

    useEffect(() => {
        if (patientId) {
            fetchMedicalrecord(patientId)
        }
    }, [patientId])

    return (
        <PrivateRoute>
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">{userName}&apos;s Medical Records</h2>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Date</th>
                                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Patient Name</th>
                                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Doctor Name</th>
                                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Disease</th>
                                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Notes</th>
                                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((record, index) => (
                                <tr key={record._id || index} className="border-t hover:bg-gray-100">
                                    <td className="px-6 py-4 text-gray-600">{record.appointmentId?.appointmentDate}</td>
                                    <td className="px-6 py-4 text-gray-600">{record.patientId?.userId?.fullName}</td>
                                    <td className="px-6 py-4 text-gray-600">{record.doctorId?.userId?.fullName}</td>
                                    <td className="px-6 py-4 text-gray-600">{record.diagnosis}</td>
                                    <td className="px-6 py-4 text-gray-600">{record.note}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => router.push(`/medicalrecorddetail?id=${record._id}`)}
                                            className="text-blue-600 hover:underline font-medium"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </PrivateRoute>
    );
}
