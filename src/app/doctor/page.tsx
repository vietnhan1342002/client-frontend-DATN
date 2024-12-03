/* eslint-disable @next/next/no-img-element */
'use client'

import BannerDetail from "@/components/ui/bannerdetail";
import Contact from "@/components/ui/contact";
import Doctors from "@/components/ui/doctor";
import Footer from "@/components/ui/footer";


export default function About() {
    return (
        <div>
            {/* Banner Section */}
            <BannerDetail
                bannerImage="/banner.jpg"
                title="Doctor"
                description="Get in touch with us for any inquiries or to book your next appointment. We're here to help!"
            />

            <div className="bg-white">
                <Doctors />
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
