/* eslint-disable @next/next/no-img-element */
/* Doctors.tsx */
'use client';

interface Doctor {
    _id: string;
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
    if (loading) {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (!doctors || doctors.length === 0) {
        return <div className="text-center py-12">No doctors available.</div>;
    }

    return (
        <div className="flex flex-col items-center py-12">
            <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                Our Doctors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor) => (
                    <div
                        key={doctor._id}
                        className="flex flex-col items-center w-60 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        onClick={() => {
                            console.log("Selected Doctor ID:", doctor._id); // Ghi ra console ID của bác sĩ
                            onSelectDoctor(doctor._id); // Gọi hàm xử lý khi chọn bác sĩ
                        }}
                    >
                        <img
                            src="/doctor-profile-1.jpg"
                            alt={doctor.userId.fullName}
                            className="w-full h-64 object-cover"
                        />
                        <div className="px-4 py-6 text-center">
                            <h4 className="text-lg font-semibold text-blue-800">{doctor.userId.fullName}</h4>
                            <p className="text-sm text-gray-600 mb-2">Specialty: {doctor.specialtyId?.name}</p>
                            <p className="text-sm text-gray-600 mb-4">Experience: {doctor.yearsOfExperience} years</p>

                            <a
                                href="#"
                                className="inline-block text-sm text-white bg-blue-900 py-2 px-6 rounded-full hover:bg-gray-400 transition-all"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
