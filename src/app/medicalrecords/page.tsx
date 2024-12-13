'use client';

import Link from 'next/link';

// Mock data for a specific user
const userMedicalRecords = [
    {
        id: '1',
        patientName: 'John Doe',
        doctorName: 'Dr. Bob Stanfield',
        date: '2024-12-03',
        illness: 'General Consultation',
        notes: 'No significant health issues.',
    },
    {
        id: '2',
        patientName: 'John Doe',
        doctorName: 'Dr. Jacob Bob',
        date: '2024-12-10',
        illness: 'Patient Consultation',
        notes: 'Follow-up required in 1 month.',
    },
    {
        id: '3',
        patientName: 'John Doe',
        doctorName: 'Dr. Tabitha Churchill',
        date: '2024-12-17',
        illness: 'Emergency Consultation',
        notes: 'Prescribed antibiotics.',
    },
];

export default function MedicalRecordsPage() {
    const userName = 'John Doe'; // Replace with dynamic user data if available

    return (
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
                        {userMedicalRecords.map((record) => (
                            <tr key={record.id} className="border-t hover:bg-gray-100">
                                <td className="px-6 py-4 text-gray-600">{record.date}</td>
                                <td className="px-6 py-4 text-gray-600">{record.patientName}</td>
                                <td className="px-6 py-4 text-gray-600">{record.doctorName}</td>
                                <td className="px-6 py-4 text-gray-600">{record.illness}</td>
                                <td className="px-6 py-4 text-gray-600">{record.notes}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/medicalrecorddetail/${record.id}`}
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
