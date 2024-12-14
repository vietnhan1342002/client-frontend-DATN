'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Doctors from "@/components/ui/doctor";
import Footer from "@/components/ui/footer";

export default function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDoctors = async () => {
            setLoading(true); // Bắt đầu trạng thái loading
            try {
                const response = await axios.get('http://localhost:8080/api/v1/doctors'); // URL API doctors
                const doctorList = response.data.result; // Giả định API trả về trong `result`
                console.log("Doctors API Response:", doctorList);
                setDoctors(doctorList); // Lưu danh sách bác sĩ vào state
            } catch (err) {
                console.error('Error fetching doctors:', err);
            } finally {
                setLoading(false); // Kết thúc trạng thái loading
            }
        };

        fetchDoctors();
    }, []);

    const handleSelectDoctor = (id: string) => {
        console.log("Selected doctor ID:", id);
    };

    return (
        <div>
            {/* Banner Section */}
            <BannerDetail
                bannerImage="/banner.jpg"
                title="Doctor"
                description="Get in touch with us for any inquiries or to book your next appointment. We're here to help!"
            />

            <div className="bg-white">
                {/* Doctors Section */}
                <Doctors
                    doctors={doctors}
                    loading={loading}
                    onSelectDoctor={handleSelectDoctor} // Truyền hàm onSelectDoctor
                />

                <section className="relative bg-blue-900 text-white py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Icon dấu ngoặc kép */}
                        <div className="text-4xl font-bold mb-6">
                            <span className="text-5xl text-white">“</span>
                        </div>

                        {/* Nội dung trích dẫn */}
                        <p className="text-lg leading-relaxed mb-8">
                            At <strong>ZCARE</strong>, we believe in a holistic approach to healing. Our team is dedicated
                            to providing exceptional care, prioritizing your health, and ensuring a seamless experience. Your well-being
                            is our commitment, and your trust is our success.
                        </p>

                        {/* Tác giả */}
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-sm text-gray-400">CEO, HealthCare</p>

                        {/* Thanh điều hướng */}
                        <div className="flex justify-center space-x-2 mt-8 ">
                            <div className="w-3 h-3 rounded-full bg-white hover:bg-gray-400 cursor-pointer"></div>
                            <div className="w-3 h-3 rounded-full bg-white hover:bg-gray-400 cursor-pointer"></div>
                            <div className="w-3 h-3 rounded-full bg-white hover:bg-gray-400 cursor-pointer"></div>
                        </div>
                    </div>
                </section>

                <Contact />
                <Footer />
            </div>
        </div>
    );
}
