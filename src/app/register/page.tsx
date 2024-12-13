/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function RegisterPage() {
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
                        <h1 className="text-2xl font-bold mb-4 text-blue-800">
                            Create Your Account
                        </h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="block text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="********"
                                />
                            </div>



                            <div className="flex items-center justify-center mb-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <p className="text-sm">
                                Already have an account?{" "}
                                <Link href="/login"
                                    className="text-blue-700 hover:underline">Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
