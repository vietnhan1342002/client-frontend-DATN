'use client';

import Image from 'next/image';

export default function PatientProfile() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Patient Profile</h1>
                    <div className="flex space-x-4">
                        {/* Edit Profile Button */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Edit Profile
                        </button>
                        <a
                            href="/medicalrecords"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 block text-center"
                        >
                            View Medical Record
                        </a>
                    </div>
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
                        <h2 className="text-xl font-semibold text-gray-700">Nguyễn Văn A</h2>
                        <p className="text-gray-500 mt-2">
                            <strong>Ngày sinh:</strong> 01/01/1990
                        </p>
                        <p className="text-gray-500 mt-2">
                            <strong>Giới tính:</strong> Nam
                        </p>
                        <p className="text-gray-500 mt-2">
                            <strong>Số điện thoại:</strong> +84 987 654 321
                        </p>
                        <p className="text-gray-500 mt-2">
                            <strong>Địa chỉ:</strong> 123 Đường ABC, Phường XYZ, Quận 1, TP.HCM
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="mb-2 text-gray-700">
                            Tên
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col">
                        <label htmlFor="dateOfBirth" className="mb-2 text-gray-700">
                            Ngày Sinh
                        </label>
                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber" className="mb-2 text-gray-700">
                            Số Điện Thoại
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            placeholder="0123456789"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 text-gray-700">
                            Địa Chỉ
                        </label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            placeholder="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="nguyenvana@example.com"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>

                {/* Update Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
