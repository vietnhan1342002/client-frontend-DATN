/* eslint-disable @next/next/no-img-element */
/* Doctors.tsx */
'use client';

import { usePathname } from 'next/navigation'; // Import usePathname

interface Doctor {
    _id: string;
    avatar: string;
    userId: {
        fullName: string;
    };
    specialtyId: {
        name: string;
    };
    yearsOfExperience: number;
    licenseNumber: string;
}

export default function Doctors({
    doctors,
    loading,
    onSelectDoctor,
}: {
    doctors: Doctor[];
    loading: boolean;
    onSelectDoctor: (_id: string) => void;
}) {
    const pathname = usePathname(); // Lấy đường dẫn hiện tại

    // Nếu đang ở trang '/', chỉ lấy 3 bác sĩ đầu tiên
    const filteredDoctors = pathname === '/' ? doctors.slice(0, 3) : doctors;

    if (loading) {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (!filteredDoctors || filteredDoctors.length === 0) {
        return <div className="text-center py-12">No doctors available.</div>;
    }

    return (
        <div className="flex flex-col items-center py-12">
            <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                Our Doctors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor) => (
                    <div
                        key={doctor._id}
                        className="flex flex-col items-center w-60 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        onClick={() => {
                            onSelectDoctor(doctor._id); // Gọi hàm xử lý khi chọn bác sĩ
                        }}
                    >
                        <img
                            src={doctor.avatar}
                            alt={doctor.userId.fullName}
                            className="w-full h-64 object-cover"
                        />
                        <div className="px-4 py-6 text-center">
                            <h4 className="text-lg font-semibold text-blue-800">{doctor.userId.fullName}</h4>
                            <p className="text-sm text-gray-600 mb-2">Specialty: {doctor.specialtyId?.name}</p>
                            <p className="text-sm text-gray-600 mb-4">Experience: {doctor.yearsOfExperience} years</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
