'use client';

import { useRouter } from 'next/router';
import {
    FaStethoscope,
    FaUserMd,
    FaBaby,
    FaBabyCarriage,
    FaTooth,
    FaPills,
    FaEye,
    FaHeadphones
} from 'react-icons/fa';

export default function ServiceDetail() {
    const router = useRouter();
    const { name } = router.query;

    // Dữ liệu chi tiết cho từng chuyên khoa
    const specialtiesData: Record<string, { icon: JSX.Element; description: string }> = {
        "Nội khoa": {
            icon: <FaStethoscope className="text-blue-500 text-6xl" />,
            description: "Nội khoa là chuyên ngành y học nghiên cứu, chẩn đoán và điều trị các bệnh lý bên trong cơ thể mà không cần phẫu thuật.",
        },
        "Ngoại khoa": {
            icon: <FaUserMd className="text-blue-500 text-6xl" />,
            description: "Ngoại khoa tập trung vào việc điều trị bệnh lý thông qua các phương pháp phẫu thuật.",
        },
        "Nhi khoa": {
            icon: <FaBaby className="text-blue-500 text-6xl" />,
            description: "Nhi khoa chuyên về chăm sóc sức khỏe, phát triển và điều trị bệnh lý cho trẻ em.",
        },
        "Sản phụ khoa": {
            icon: <FaBabyCarriage className="text-blue-500 text-6xl" />,
            description: "Sản phụ khoa là chuyên ngành chăm sóc sức khỏe phụ nữ, thai kỳ và sinh sản.",
        },
        "Răng hàm mặt": {
            icon: <FaTooth className="text-blue-500 text-6xl" />,
            description: "Răng hàm mặt là chuyên ngành chăm sóc và điều trị các vấn đề liên quan đến răng miệng và hàm.",
        },
        "Da liễu": {
            icon: <FaPills className="text-blue-500 text-6xl" />,
            description: "Da liễu là ngành y học nghiên cứu và điều trị các bệnh lý về da, tóc, móng và các bệnh lây qua đường tình dục.",
        },
        "Mắt": {
            icon: <FaEye className="text-blue-500 text-6xl" />,
            description: "Chuyên khoa Mắt tập trung vào chẩn đoán và điều trị các bệnh lý về mắt và thị lực.",
        },
        "Tai mũi họng": {
            icon: <FaHeadphones className="text-blue-500 text-6xl" />,
            description: "Tai mũi họng là chuyên ngành y học nghiên cứu và điều trị các bệnh lý liên quan đến tai, mũi và họng.",
        },
    };

    // Kiểm tra nếu name là undefined
    if (!name || Array.isArray(name)) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-red-500">Chuyên khoa không hợp lệ</h1>
                <button
                    className="mt-4 px-4 py-2 bg-blue-00 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => router.push('/')}
                >
                    Quay lại trang chính
                </button>
            </div>
        );
    }

    const specialty = specialtiesData[name];

    // Nếu không tìm thấy chuyên khoa
    if (!specialty) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-red-500">Chuyên khoa không tồn tại</h1>
                <button
                    className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => router.push('/')}
                >
                    Quay lại trang chính
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6">
            <div className="text-center">
                {specialty.icon}
                <h1 className="text-3xl font-bold mt-4">{name}</h1>
                <p className="text-gray-700 text-lg mt-4">{specialty.description}</p>
            </div>
            <button
                className="mt-6 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
                onClick={() => router.push('/')}
            >
                Quay lại trang chính
            </button>
        </div>
    );
}
