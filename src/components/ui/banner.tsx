/* eslint-disable @next/next/no-img-element */
'use client';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedService } from '@/redux/store/serviceSlice';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';


export default function Banner() {
    const serviceData = useSelector((state: RootState) => state.services.services);
    const uniqueDates = new Set<string>();

    const dispatch = useDispatch();
    const router = useRouter()

    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [filteredDates, setFilteredDates] = useState([]);

    const [selectedService, setSelectedService] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const [doctorScheduleId, setDoctorScheduleId] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const checkLoginStatus = () => {
            const accessToken = localStorage.getItem('accessToken')
            if (accessToken) {
                setIsLoggedIn(true)
            }
        };
        checkLoginStatus();
    }, []);

    const initialFormData = {
        name: '',
        phone: '',
        email: '',  // Thêm trường email
        phoneError: '',
        emailError: ''  // Thêm lỗi cho email
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        // Hàm validate số điện thoại Việt Nam
        const validatePhone = (phone: string) => {
            const regex = /^(0[3-9])[0-9]{8}$/;
            return regex.test(phone);
        };

        // Hàm validate email
        const validateEmail = (email: string) => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        };

        if (id === 'phone') {
            if (value.length === 0) {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    phoneError: 'Phone number is required.'
                }));
            } else if (value.length !== 10) {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    phoneError: 'Phone number must be 10 digits.'
                }));
            } else if (!validatePhone(value)) {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    phoneError: 'Invalid phone number. Please starting with one of the valid prefixes (03, 05, 07, 08, 09).'
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    phoneError: ''
                }));
            }
        } else if (id === 'email') {
            if (value.length === 0) {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    emailError: 'Email is required.'
                }));
            } else if (!validateEmail(value)) {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    emailError: 'Invalid email address.'
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [id]: value,
                    emailError: ''
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [id]: value
            }));
        }
    };


    const fetchDoctorBySpecialtyId = async (specialtyId: string) => {
        try {
            const response = await axios.get(`http://13.211.141.240:8080/api/v1/filter/specialties/doctors?specialtyId=${specialtyId}`);
            // const response = await axios.get(`http://13.211.141.240:8080/api/v1/filter/specialties/doctors?specialtyId=${specialtyId}`)

            if (response.data) {
                setFilteredDoctors(response.data)
            }
        } catch (err: any) {
            toast.error(err.response.data.message)
            console.error("Error fetching specialties:", err);
        }
    };

    const fetchScheduleByDoctorId = async (doctorId: string, date: string, shiftId: string) => {
        try {
            const response = await axios.get(`http://13.211.141.240:8080/api/v1/filter/doctor-schedules?date=${date}&doctorId=${doctorId}&status=active&shiftId=${shiftId}`);
            // const response = await axios.get(`http://13.211.141.240:8080/api/v1/filter/doctor-schedules?date=${date}&doctorId=${doctorId}&status=active`);

            if (response.data) {
                setFilteredDates(response.data)
            }
            if (shiftId) {
                setDoctorScheduleId(response.data[0]._id)
            }
        } catch (err: any) {
            toast.error(err.response.data.message)
            console.error("Error fetching specialties:", err);
        }
    };

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        fetchDoctorBySpecialtyId(selectedValue);
        setSelectedService(selectedValue);
        setSelectedDoctor('');
        setSelectedDate('');
        setSelectedTime('');
        dispatch(updateSelectedService(selectedValue));
    };

    const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedDoctor(selectedValue);
        try {

            fetchScheduleByDoctorId(selectedValue, selectedDate, selectedTime);
            setSelectedDate('');
            setSelectedTime('');
            setFilteredDates([]);
        } catch (error: any) {
            toast.error('Failed to fetch schedule. Please try again later.');
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedDate(selectedValue);
        if (selectedDoctor) {
            fetchScheduleByDoctorId(selectedDoctor, selectedValue, selectedTime)

        }
        setSelectedTime('');  // Reset the time selection when a new date is chosen
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value; // shiftId được chọn
        setSelectedTime(selectedValue);
        if (selectedDate && selectedDoctor) {
            fetchScheduleByDoctorId(selectedDoctor, selectedDate, selectedValue);
        }
    };

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const patientId = localStorage.getItem('patientId');
        setError(null);
        try {
            if (patientId) {
                await handleAppointment(patientId);
            } else {
                await handleRegistrationAndAppointment();
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    // Hàm tạo lịch hẹn cho bệnh nhân hiện tại
    const handleAppointment = async (patientId: string) => {
        try {
            const patient = await axios.get(`http://13.211.141.240:8080/api/v1/patients/${patientId}`);

            const appointment = await axios.post('http://13.211.141.240:8080/api/v1/appointments/', {
                patientId: patient.data._id,
                doctorId: selectedDoctor,
                doctorScheduleId: doctorScheduleId
            });

            const appointmentDetail = await getAppointmentDetail(appointment.data._id);
            router.push(`/appointment?id=${appointment.data._id}`);
            resetFormState();
            toast.success(`Your appointment has been scheduled for ${appointmentDetail}. Have a good day!`);
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to create appointment');
        }
    };

    // Hàm tạo tài khoản người dùng mới và đặt lịch hẹn
    const handleRegistrationAndAppointment = async () => {
        try {
            const user = await axios.post('http://13.211.141.240:8080/api/v1/user-auth/register', {
                fullName: formData.name,
                phoneNumber: formData.phone,
                email: formData.email,
                password: formData.phone
            });

            const patient = await axios.get(`http://13.211.141.240:8080/api/v1/patients/user/${user.data._id}`);

            const appointment = await axios.post('http://13.211.141.240:8080/api/v1/appointments/', {
                patientId: patient.data,
                doctorId: selectedDoctor,
                doctorScheduleId: doctorScheduleId
            });

            const appointmentDetail = await getAppointmentDetail(appointment.data._id);
            router.push(`/appointment?id=${appointment.data._id}`);
            // Lưu patientId vào localStorage
            localStorage.setItem('patientId', patient.data._id);

            resetFormState();
            toast.success(`I created an account for you with your phone as the password.\nYour appointment has been scheduled for ${appointmentDetail}. Have a good day!`);
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to register user');
        }
    };

    // Hàm lấy chi tiết lịch hẹn
    const getAppointmentDetail = async (appointmentId: string) => {
        const response = await axios.get(`http://13.211.141.240:8080/api/v1/appointments/${appointmentId}`);
        return response.data.result.appointmentDate;
    };

    // Hàm reset trạng thái form sau khi thành công
    const resetFormState = () => {
        setSelectedService('');
        setSelectedDoctor('');
        setSelectedDate('');
        setSelectedTime('');
        setFormData(initialFormData);
    };


    return (
        <section className="relative h-[80vh]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/banner.jpg"
                    alt="Doctor"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay Content */}
            <div className="relative z-8 max-w-7xl mx-auto h-full flex items-center px-4">
                {/* Form Section */}
                <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <div className="bg-blue-900 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold text-white text-center mb-4">Book an Appointment</h2>
                        <form className="space-y-4 text-base relative" onSubmit={handleSubmit}>
                            {!isLoggedIn && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-white text-sm">Name <span className="text-white">*</span></label>
                                        <input
                                            id="name"
                                            type="text"
                                            onChange={handleChange}
                                            value={formData.name}
                                            placeholder="John Doe"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="phone" className="block text-white text-sm">Phone<span className="text-white">*</span></label>
                                        <input
                                            id="phone"
                                            type="text"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            placeholder="0905234572"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                        />
                                        {formData.phoneError && (
                                            <p className="text-red-500 text-xs font-bold absolute top-0 right-0 mt-1 mr-1 p-2 bg-red-100 rounded-md shadow-md">
                                                {formData.phoneError}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-2"> {/* Đảm bảo email chiếm cả 2 cột */}
                                        <label htmlFor="email" className="block text-white text-sm">Email <span className="text-white">*</span></label>
                                        <input
                                            id="email"
                                            type="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            placeholder="example@domain.com"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                        />
                                        {formData.emailError && (
                                            <p className="text-red-500 text-xs font-bold absolute top-0 right-0 mt-1 mr-1 p-2 bg-red-100 rounded-md shadow-md">
                                                {formData.emailError}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Service Dropdown */}
                                <div>
                                    <label htmlFor="department" className="block text-white text-sm">Service <span className="text-white">*</span></label>
                                    <select
                                        id="department"
                                        value={selectedService || ''}
                                        onChange={handleServiceChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    >
                                        <option value="">Select a Service</option>
                                        {serviceData.map((service) => (
                                            <option key={service._id} value={service._id}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="doctor" className="block text-white text-sm">Doctor <span className="text-white">*</span></label>
                                    <select
                                        id="doctor"
                                        value={selectedDoctor || ''}
                                        onChange={handleDoctorChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${selectedService ? 'border-gray-300' : 'border-gray-500 bg-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
                                        disabled={!selectedService}
                                    >
                                        <option value="">Select a Doctor</option>
                                        {filteredDoctors.map((doctor: any) => (
                                            <option key={doctor._id} value={doctor._id}>
                                                {doctor?.userId?.fullName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="date" className="block text-white text-sm">Date <span className="text-white">*</span></label>
                                    <select
                                        id="date"
                                        value={selectedDate || ''}
                                        onChange={handleDateChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${selectedDoctor ? 'border-gray-300' : 'border-gray-500 bg-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
                                        disabled={!selectedDoctor}
                                    >
                                        <option value="">Select a Date</option>
                                        {filteredDates.map((date: any) => {
                                            const formattedDate = new Date(date.date).toISOString().split('T')[0];
                                            if (!uniqueDates.has(formattedDate)) {
                                                uniqueDates.add(formattedDate);
                                                return (
                                                    <option key={`${date.date}-${date._id}`} value={formattedDate}>
                                                        {formattedDate}
                                                    </option>
                                                );
                                            }
                                            return null;
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-white text-sm">Time <span className="text-white">*</span></label>
                                    <select
                                        id="time"
                                        value={selectedTime || ''}
                                        onChange={handleTimeChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${selectedDoctor ? 'border-gray-300' : 'border-gray-500 bg-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
                                        disabled={!selectedDate}
                                    >
                                        <option value="">Select a Time</option>
                                        {filteredDates.map((time: any) => (
                                            <option key={`${time.date}-${time.shiftId._id}`} value={time.shiftId._id}>
                                                {time?.shiftId.name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white text-sm">Note</label>
                                <textarea
                                    id="message"
                                    placeholder="Any special instructions"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={(!isLoggedIn && (!formData.name || !formData.email || !formData.phone || !selectedTime)) || !selectedTime}
                                className={`mt-4 w-full text-xl font-bold py-2 px-4 rounded-lg focus:outline-none
    ${(!isLoggedIn && formData.name && formData.phone && formData.email && !formData.phoneError && selectedTime) || isLoggedIn ? 'bg-white text-black hover:bg-blue-200' : 'bg-gray-400 text-gray-800 cursor-not-allowed'}`}
                            >
                                Book
                            </button>

                        </form>
                        <Toaster className='absolute' position='top-center' />
                    </div>
                </div>
            </div>
        </section>
    );
}
