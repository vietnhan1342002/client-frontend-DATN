/* eslint-disable @next/next/no-img-element */
'use client';

interface BannerDetailProps {
    bannerImage: string; // Đường dẫn ảnh (string)
    title: string;       // Tiêu đề (string)
    description: string; // Mô tả (string)
}

export default function BannerDetail({ bannerImage, title, description }: BannerDetailProps) {
    return (
        <section className="relative h-[40vh] ">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={bannerImage} // Sử dụng ảnh được truyền vào qua prop
                    alt="Banner Image"
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Overlay Content */}
            <div className="relative z-8 max-w-7xl mx-auto h-full flex items-center justify-start px-4">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-white">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
                    <p className="text-black mb-6">{description}</p>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
