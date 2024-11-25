/* eslint-disable @next/next/no-img-element */
'use client';


export default function Doctors() {
    const doctors = [
        { name: "Doctor's Name", specialty: "Neurology", imageUrl: "/doctor-profile-1.jpg" },
        { name: "Doctor's Name", specialty: "Neurology", imageUrl: "/doctor-profile-2.jpg" },
        { name: "Doctor's Name", specialty: "Neurology", imageUrl: "/doctor-profile-3.jpg" },
    ];

    return (
        <div className="flex flex-col items-center py-12">

            <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                Our Doctors
            </h2>
            <div className="flex space-x-8">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-60 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={doctor.imageUrl}
                            alt={doctor.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="px-4 py-6 text-center">
                            <h4 className="text-lg font-semibold text-blue-800">{doctor.name}</h4>
                            <p className="text-sm text-gray-600 mb-4">{doctor.specialty}</p>

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
            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-8 ">
                <div className="w-3 h-3 rounded-full bg-blue-900 hover:bg-gray-400 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-blue-900 hover:bg-gray-400 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-blue-900 hover:bg-gray-400 cursor-pointer"></div>
            </div>
        </div>
    );
}
