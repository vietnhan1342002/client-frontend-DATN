'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function RegisterPage() {
    const initialRegister = {
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        phoneError: '',
        fullNameError: '',
        emailError: '',
        passwordError: ''
    }
    const router = useRouter()
    const [formRegister, setRegister] = useState(initialRegister)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Hàm kiểm tra định dạng số điện thoại
        const validatePhone = (phone: string) => {
            const regex = /^(0[3-9])[0-9]{8}$/;
            return regex.test(phone);
        };

        // Hàm kiểm tra định dạng email
        const validateEmail = (email: string) => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        };

        // Kiểm tra lỗi cho từng trường hợp
        if (name === 'phoneNumber') {
            if (value.length === 0) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    phoneError: 'Phone number is required.'
                }));
            } else if (value.length !== 10) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    phoneError: 'Phone number must be 10 digits.'
                }));
            } else if (!validatePhone(value)) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    phoneError: 'Invalid phone number. Please start with one of the valid prefixes (03, 05, 07, 08, 09).'
                }));
            } else {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    phoneError: ''
                }));
            }
        } else if (name === 'fullName') {
            if (value.trim().length === 0) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    fullNameError: 'Full name is required.'
                }));
            } else {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    fullNameError: ''
                }));
            }
        } else if (name === 'email') {
            if (value.trim().length === 0) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    emailError: 'Email is required.'
                }));
            } else if (!validateEmail(value)) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    emailError: 'Invalid email format.'
                }));
            } else {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    emailError: ''
                }));
            }
        } else if (name === 'password') {
            if (value.length === 0) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    passwordError: 'Password is required.'
                }));
            } else if (value.length < 6) {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    passwordError: 'Password must be at least 6 characters.'
                }));
            } else {
                setRegister(prev => ({
                    ...prev,
                    [name]: value,
                    passwordError: ''
                }));
            }
        } else {
            setRegister(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const fetchRegister = async () => {
        try {
            await axios.post('http://localhost:8080/api/v1/user-auth/register', {
                password: formRegister.password,
                fullName: formRegister.fullName,
                phoneNumber: formRegister.phoneNumber,
                email: formRegister.email
            })
            localStorage.setItem('phoneNumber', formRegister.phoneNumber)
            toast.success('Register successful!');
            router.push('/login');
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error(`Login failed: ${error.response.data.message || 'Unknown error'}`);
                } else {
                    toast.error(`An error occurred: ${error.message}`);
                }
            } else {
                toast.error('Network error or no response from server');
            }
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchRegister()
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100 py-8">
            {/* Outer Card with Rounded Border */}
            <div className="bg-white rounded-3xl shadow-lg flex w-4/5 max-w-5xl border-2 border-blue-500 overflow-hidden">
                {/* Left Section - Full Image */}
                <div className="w-1/2 hidden md:block">
                    <img
                        src="/login.jpg" // Thay đường dẫn ảnh phù hợp
                        alt="Register Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 border-l-2 border-gray-200">
                    {/* Inner Box for Right Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 max-h-[700px] overflow-auto">
                        <h1 className="text-2xl font-bold mb-6 text-blue-800">
                            Create Your Account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name Input */}
                            <div className="mb-3 relative">
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Full Name<span className="ml-1 text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formRegister.fullName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your full name"
                                />
                                {formRegister.fullNameError && (
                                    <p className="text-red-500 text-xs font-bold absolute top-[-20px] right-0 mt-1 mr-1 p-2 bg-red-100 rounded-md shadow-md">
                                        {formRegister.fullNameError}
                                    </p>
                                )}
                            </div>

                            {/* Phone Number Input */}
                            <div className="mb-3 relative">
                                <label htmlFor="phone" className="block text-sm font-medium">
                                    Phone Number<span className="ml-1 text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formRegister.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                                {formRegister.phoneError && (
                                    <p className="text-red-500 text-xs font-bold absolute top-[-20px] right-0 mt-1 mr-1 p-2 bg-red-100 rounded-md shadow-md">
                                        {formRegister.phoneError}
                                    </p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="mb-3 relative">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email<span className="ml-1 text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formRegister.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                                {formRegister.emailError && (
                                    <p className="text-red-500 text-xs font-bold absolute top-[-20px] right-0 mt-1 mr-1 p-2 bg-red-100 rounded-md shadow-md">
                                        {formRegister.emailError}
                                    </p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className="mb-3 relative">
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password<span className="ml-1 text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formRegister.password}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                />
                                {formRegister.passwordError && (
                                    <p className="text-red-500 text-xs font-bold absolute top-[-20px] right-0 mt-1 mr-1 p-2 bg-red-100 rounded-md shadow-md">
                                        {formRegister.passwordError}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center justify-center mb-4">
                                <button
                                    type="submit"
                                    disabled={
                                        !formRegister.phoneNumber ||
                                        !formRegister.password ||
                                        !formRegister.fullName ||
                                        !formRegister.email ||
                                        !!formRegister.phoneError ||
                                        !!formRegister.passwordError ||
                                        !!formRegister.fullNameError ||
                                        !!formRegister.emailError
                                    }
                                    className={`w-full text-xl font-bold py-2 px-4 rounded-lg focus:outline-none ${formRegister.password && formRegister.phoneNumber && formRegister.fullName && formRegister.email && !formRegister.phoneError && !formRegister.passwordError && !formRegister.fullNameError && !formRegister.emailError
                                        ? 'bg-blue-900 text-white hover:bg-blue-700'
                                        : 'bg-gray-400 text-gray-800 cursor-not-allowed'}`}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <Toaster className='absolute' position='top-center' />
                        <div className="text-center mt-4">
                            <p className="text-sm">
                                Already have an account?{" "}
                                <Link href="/login" className="text-blue-700 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
