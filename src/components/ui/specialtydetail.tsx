/* eslint-disable @next/next/no-img-element */
'use client';

import BannerDetail from "@/components/ui/bannerdetail";


interface SpecialtyDetailProps {
    bannerImage: string; // Hình ảnh banner (string)
    title: string;       // Tiêu đề banner (string)
    description: string; // Mô tả banner (string)
    cards: Array<{
        image: string;     // Hình ảnh của card (string)
        title: string;     // Tiêu đề card (string)
        description: string; // Mô tả card (string)
        link: string;       // Đường dẫn chi tiết (string)
    }>;
}

export default function SpecialtyDetail({ bannerImage, title, description, cards }: SpecialtyDetailProps) {
    return (
        <div>
            {/* Sử dụng BannerDetail */}
            <BannerDetail
                bannerImage={bannerImage}
                title={title}
                description={description}
            />

            {/* Cards Section */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-200"
                        >
                            {/* Hình ảnh của card */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">{card.title}</h3>

                                <button >{index}</button>
                                <p className="text-gray-700 mb-4">{card.description}</p>
                                <a
                                    href={card.link}
                                    className="text-blue-900 font-bold hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
