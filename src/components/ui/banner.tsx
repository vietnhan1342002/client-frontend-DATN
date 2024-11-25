/* eslint-disable @next/next/no-img-element */
'use client'
export default function Banner() {
    return (
        <section className="relative h-[80vh]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/banner.jpg" // Đảm bảo rằng đường dẫn này trỏ đến đúng ảnh
                    alt="Doctor"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay Content */}
            <div className="relative z-8 max-w-7xl mx-auto h-full flex items-center justify-start px-4">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-white">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Chăm Sóc Sức Khỏe Toàn Diện Cho Bạn
                    </h2>
                    <p className="text-black mb-6">
                        Tại phòng khám đa khoa của chúng tôi, chúng tôi cam kết mang đến dịch vụ y tế chất lượng cho mọi giai đoạn của cuộc sống.
                        Từ khám sức khỏe định kỳ đến điều trị chuyên sâu, đội ngũ chuyên gia tận tâm luôn đồng hành vì sức khỏe của bạn.
                    </p>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800">
                        Our Services
                    </button>
                </div>
            </div>
        </section>
    );
}
