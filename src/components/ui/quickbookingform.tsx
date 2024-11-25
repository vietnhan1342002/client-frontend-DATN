export default function QuickBookingForm() {
    return (
        <section className="relative w-full py-4 -mt-10 z-10">
            <div className="max-w-5xl mx-auto bg-blue-100 p-6 rounded-lg shadow-lg relative">
                <h2 className="text-xl font-bold text-blue-900 mb-4">ĐẶT LỊCH KHÁM NHANH</h2>
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
                        <option value="general_checkup">Khám sức khỏe tổng quát</option>
                        <option value="dental_service">Điều trị tim mạch</option>
                        <option value="health_consultation">Xét nghiệm máu</option>
                        <option value="general_checkup">Điện tim(ECG)</option>
                        <option value="dental_service">Siêu âm ổ bụng</option>
                        <option value="health_consultation">Phẫu thuật cấp cứu</option>
                        <option value="general_checkup">Điều trị xương khớp</option>
                        <option value="dental_service">X-quang</option>
                        <option value="health_consultation">Khám trẻ em</option>
                        <option value="general_checkup">Tiêm chủng cho trẻ</option>
                        <option value="dental_service">Điều trị bệnh lý hô hấp</option>
                        <option value="health_consultation">Khám phụ khoa</option>
                        <option value="general_checkup">Siêu âm thai</option>
                        <option value="dental_service">Tiêm phòng cho phụ nữ</option>
                        <option value="health_consultation">Khám răng miệng</option>
                        <option value="general_checkup">Niềng răng</option>
                        <option value="dental_service">Phẫu thuật hàm mặt</option>
                        <option value="health_consultation">X-quang răng</option>
                        <option value="general_checkup">Khám và điều trị mụn</option>
                        <option value="dental_service">Phẫu thuật u, nốt ruồi</option>
                        <option value="health_consultation">Xét nghiệm da liễu</option>
                        <option value="general_checkup">Khám mắt</option>
                        <option value="dental_service">Phẫu thuật LASIK</option>
                        <option value="health_consultation">Siêu âm mắt</option>
                        <option value="general_checkup">Khám tai, mũi, họng</option>
                        <option value="dental_service">Phẫu thuật tai</option>
                        <option value="health_consultation">Cắt amidan</option>
                    </select>


                    {/* Gửi button */}
                    <button
                        type="submit"
                        className="col-span-1 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-gray-400"
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </section>
    );
}
