'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Doctors from "@/components/ui/doctor";
import Footer from "@/components/ui/footer";

export default function Doctor() {
    const [doctors, setDoctors] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 6; // Kích thước mỗi trang (số bác sĩ trên mỗi trang)

    const handleSelectDoctor = (id: string) => {
        console.log("Selected doctor ID:", id);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/doctors?current=${currentPage}&pageSize=${pageSize}`);
            const { result, totalPages } = response.data;
            const doctorList = result;
            setDoctors(doctorList);
            setTotalPages(totalPages);
        } catch (err) {
            console.error('Error fetching doctors:', err);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, [currentPage]);

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
                    loading={false}
                    onSelectDoctor={handleSelectDoctor} // Truyền hàm onSelectDoctor
                />

                {/* Pagination Controls */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-900 text-white rounded disabled:bg-gray-300"
                    >
                        First
                    </button>

                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-900 text-white rounded disabled:bg-gray-300"
                    >
                        Previous
                    </button>

                    {/* Hiển thị danh sách số trang */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-900 text-white' : 'bg-white text-blue-900 border'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-900 text-white rounded disabled:bg-gray-300"
                    >
                        Next
                    </button>

                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-900 text-white rounded disabled:bg-gray-300"
                    >
                        Last
                    </button>
                </div>

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
                    </div>
                </section>

                <Contact />
                <Footer />
            </div>
        </div>
    );
}
