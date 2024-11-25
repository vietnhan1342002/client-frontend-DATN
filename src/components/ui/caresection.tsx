/* eslint-disable @next/next/no-img-element */
'use client'

export default function CareSection() {
    return (
        <section className="w-full py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Tiêu đề */}
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    Phục vụ bệnh nhân bằng cả trái tim
                </h2>
                {/* Nội dung mô tả */}
                <p className="text-gray-600 mb-6">
                    ZCARE là phòng khám đa khoa hàng đầu, cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho mọi lứa tuổi. Chúng tôi tự hào áp dụng các kỹ thuật y khoa tiên tiến nhất, cùng đội ngũ bác sĩ tận tâm, giúp cải thiện chất lượng cuộc sống và sức khỏe của cộng đồng.
                </p>
                {/* Nút Xem Thêm */}
                <button className="text-blue-900 font-semibold hover:underline flex items-center gap-2 mx-auto">
                    Xem Thêm Dịch Vụ <span className="text-lg">→</span>
                </button>
            </div>
            {/* Hình ảnh */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <img
                    src="/doctor-team.jpg"
                    alt="Bác sĩ tận tâm chăm sóc bệnh nhân"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}
