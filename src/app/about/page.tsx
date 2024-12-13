/* eslint-disable @next/next/no-img-element */
'use client'

import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import News from "@/components/ui/new";

export default function About() {
    return (
        <div>
            {/* Banner Section */}
            <BannerDetail
                bannerImage="/banner.jpg"
                title="About us"
                description="Get in touch with us for any inquiries or to book your next appointment. We're here to help!"
            />

            <div className="bg-white">
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                        {/* Nội dung bên trái */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-lg text-blue-700 font-bold uppercase mb-2">
                                Welcome to Hospital Name
                            </h2>
                            <h1 className="text-4xl font-bold text-blue-900 mb-6 leading-snug">
                                Best Care for Your Good Health
                            </h1>

                            {/* Danh sách dấu chấm */}
                            <ul className="grid grid-cols-2 gap-4 mb-6">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="text-blue-700">●</span> A Passion for Healing
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="text-blue-700">●</span> 5-Star Care
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="text-blue-700">●</span> All our best
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="text-blue-700">●</span> Believe in Us
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="text-blue-700">●</span> Always Caring
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="text-blue-700">●</span> A Legacy of Excellence
                                </li>
                            </ul>

                            {/* Đoạn mô tả */}
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At <strong>ZCARE</strong>, we pride ourselves on delivering
                                exceptional care tailored to every patient. With a dedicated team of
                                professionals and state-of-the-art facilities, we aim to provide a seamless
                                healthcare experience that prioritizes your health and well-being.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in a holistic approach to healing, combining passion, innovation,
                                and compassion. Whether you’re here for a routine checkup or a specialized
                                treatment, we are committed to ensuring the highest standards of care.
                            </p>
                        </div>

                        {/* Hình ảnh bên phải */}
                        <div className="w-full md:w-1/2">
                            <img
                                src="/doctor-team.jpg" // Đường dẫn ảnh của bạn
                                alt="Hospital Team"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section
                    className="relative text-blue-900 py-16 bg-cover bg-center"
                    style={{ backgroundImage: "url('/banner.jpg')" }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Icon dấu ngoặc kép */}
                        <div className="text-4xl text-blue-900 font-bold mb-6">
                            <span className="text-5xl">“</span>
                        </div>

                        {/* Nội dung trích dẫn */}
                        <p className="text-lg text-blue-900 leading-relaxed mb-8">
                            At <strong>ZCARE</strong>, we believe in a holistic approach to healing. Our team is dedicated
                            to providing exceptional care, prioritizing your health, and ensuring a seamless experience. Your well-being
                            is our commitment, and your trust is our success.
                        </p>

                        {/* Tác giả */}
                        <h3 className="text-xl text-blue-900 font-semibold">John Doe</h3>
                        <p className="text-lg text-gray-900">CEO, HealthCare</p>

                        {/* Thanh điều hướng */}
                        <div className="flex justify-center space-x-2 mt-8">
                            <div className="w-3 h-3 rounded-full bg-white hover:bg-gray-400 cursor-pointer"></div>
                            <div className="w-3 h-3 rounded-full bg-white hover:bg-gray-400 cursor-pointer"></div>
                            <div className="w-3 h-3 rounded-full bg-white hover:bg-gray-400 cursor-pointer"></div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        {/* Nội dung bên trái */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-lg text-blue-700 font-bold uppercase mb-2">
                                Tầm nhìn
                            </h2>

                            {/* Đoạn mô tả */}
                            <p className="text-lg text-gray-600 mb-6">
                                Đến 2030, ZCARE là một tập đoàn y tế lớn của Việt Nam cung cấp
                                những giải pháp sức khỏe uy tín, chính xác và hợp lý được cộng đồng đón nhận
                            </p>

                            <h2 className="text-lg text-blue-700 font-bold uppercase mb-2">
                                Sứ mệnh
                            </h2>

                            <p className="text-lg text-gray-600">
                                ZCARE không ngừng phát triển, lớn mạnh mỗi ngày để hoàn thành
                                tốt sứ mệnh cung cấp những giải pháp tốt nhất chăm sóc, bảo vệ sức khỏe
                                và phòng ngừa bệnh tật cho từng cá nhân, gia đình, đơn vị, cộng đồng tại
                                Đà Nẵng, khu vực miền Trung - Tây Nguyên, toàn thế Việt Nam và các
                                nước Đông Dương
                            </p>
                        </div>

                        {/* Hình ảnh bên phải nhỏ hơn */}
                        <div className="w-full md:w-1/2">
                            <img
                                src="/about.png" // Đường dẫn ảnh của bạn
                                alt="ZCARE Vision"
                                className="w-full rounded-lg shadow-lg max-w-xs mx-auto"
                            />
                        </div>
                    </div>
                </section>

                <News />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
