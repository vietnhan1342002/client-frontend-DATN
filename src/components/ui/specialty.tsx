/* eslint-disable @next/next/no-img-element */
'use client';


import { FaHeartbeat, FaDna, FaTint, FaCheck, FaHeart } from 'react-icons/fa';

export default function Specialty() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                    Our Specialties
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="bg-white shadow-lg rounded-lg p-6 max-h-[420px] overflow-y-auto">
                        <ul className="space-y-4">
                            {/* List items with icons on the left */}
                            {[
                                { name: "Nội khoa", icon: <FaHeart className="text-blue-900" /> },
                                { name: "Ngoại khoa", icon: <FaHeartbeat className="text-blue-900" /> },
                                { name: "Nhi khoa", icon: <FaDna className="text-blue-900" /> },
                                { name: "Sản phụ khoa", icon: <FaCheck className="text-blue-900" /> },
                                { name: "Răng hàm mặt", icon: <FaHeartbeat className="text-blue-900" /> },
                                { name: "Da liễu", icon: <FaTint className="text-blue-900" /> },
                                { name: "Mắt", icon: <FaHeart className="text-blue-900" /> },
                                { name: "Tai, mũi, họng", icon: <FaDna className="text-blue-900" /> }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-900">
                                        {/* Icon */}
                                        <span className="text-xl">{item.icon}</span>
                                        {/* Text */}
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
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
                                Cam kết chăm sóc sức khỏe toàn diện cho bạn.
                            </h4>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
                                {[
                                    "Sức khỏe là tài sản quý giá",
                                    "Dịch vụ y tế chuyên nghiệp",
                                    "Luôn tận tâm vì bạn",
                                    "Niềm tin của cộng đồng",
                                    "Chất lượng tạo nên uy tín",
                                    "Luôn đồng hành cùng sức khỏe của bạn",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="text-blue-500 mr-2">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-600">
                            Phòng khám đa khoa của chúng tôi mang đến các dịch vụ y tế hiện đại, tận tâm
                            và toàn diện nhằm chăm sóc sức khỏe của bạn và gia đình. Đội ngũ y bác sĩ
                            giàu kinh nghiệm luôn sẵn sàng đồng hành cùng bạn trong hành trình chăm sóc sức khỏe.
                        </p>
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
