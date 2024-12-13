/* eslint-disable @next/next/no-img-element */


import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            {/* Outer Card with Rounded Border */}
            <div className="bg-white rounded-3xl shadow-lg flex w-4/5 max-w-5xl border-2 border-blue-500 overflow-hidden">
                {/* Left Section - Full Image */}
                <div className="w-1/2">
                    <img
                        src="/login.jpg" // Thay đường dẫn ảnh phù hợp
                        alt="Login Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Section */}
                <div className="w-1/2 p-10 border-l-2 border-gray-200">
                    {/* Inner Box for Right Section */}
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300">
                        <h1 className="text-3xl text-center font-bold mb-6 text-blue-800">
                            Welcome to <span className="text-blue-900">ZCARE</span>
                        </h1>


                        <form>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="********"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <input type="checkbox" id="remember" className="mr-2" />
                                    <label htmlFor="remember" className="text-sm">
                                        Remember me
                                    </label>
                                </div>

                            </div>
                            <Link
                                href="/profile"
                                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 text-center block hover:bg-blue-700 transition"
                            >
                                Login
                            </Link>
                        </form>
                        <div className="text-center mt-4">
                            <p className="text-sm">
                                Don’t have an account?{" "}
                                <a href="/register" className="text-blue-700 hover:underline">
                                    Register
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
