

export default function QuickBookingForm() {
    return (
        <section className="w-full py-4">
            <div className="max-w-5xl mx-auto bg-blue-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">ĐẶT LỊCH KHÁM NHANH</h2>
                <form className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    {/* Họ và tên */}
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        className="col-span-2 border rounded-md p-3 focus:outline-none focus:ring focus:border-sky-500"
                    />

                    {/* Số điện thoại */}
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        className="col-span-2 border rounded-md p-3 focus:outline-none focus:ring focus:border-sky-500"
                    />

                    {/* Ngày đặt */}
                    <input
                        type="date"
                        className="col-span-1 border rounded-md p-3 focus:outline-none focus:ring focus:border-sky-500"
                    />

                    {/* Dịch vụ */}
                    <select
                        className="col-span-1 border rounded-md p-3 focus:outline-none focus:ring focus:border-sky-500"
                    >
                        <option value="">Dịch vụ</option>
                        <option value="general_checkup">Khám tổng quát</option>
                        <option value="dental_service">Dịch vụ nha khoa</option>
                        <option value="health_consultation">Tư vấn sức khỏe</option>
                    </select>

                    {/* Địa điểm khám */}
                    <select
                        className="col-span-2 border rounded-md p-3 focus:outline-none focus:ring focus:border-sky-500"
                    >
                        <option value="">Địa điểm khám</option>
                        <option value="hanoi">Hà Nội</option>
                        <option value="saigon">Sài Gòn</option>
                        <option value="danang">Đà Nẵng</option>
                    </select>

                    {/* Gửi button */}
                    <button
                        type="submit"
                        className="col-span-1 bg-yellow-600 text-white rounded-md p-3 font-semibold hover:bg-yellow-500 transition"
                    >
                        Gửi
                    </button>
                </form>
            </div>

        </section>
    );
}
