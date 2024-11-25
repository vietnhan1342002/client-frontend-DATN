/* eslint-disable @next/next/no-img-element */
'use client';

import { FaEye, FaHeart } from 'react-icons/fa';

export default function News() {
    const newsArticles = [
        {
            title: "This Article's Title goes Here, but not too long.",
            date: "Monday 05, September 2021",
            author: "By Author",
            likes: 86,
            comments: 68,
            imageUrl: "/doctor-profile-1.jpg",
        },
        {
            title: "This Article's Title goes Here, but not too long.",
            date: "Monday 05, September 2021",
            author: "By Author",
            likes: 86,
            comments: 68,
            imageUrl: "/doctor-profile-1.jpg",
        },
        {
            title: "This Article's Title goes Here, but not too long.",
            date: "Monday 05, September 2021",
            author: "By Author",
            likes: 86,
            comments: 68,
            imageUrl: "/doctor-profile-1.jpg",
        },
        {
            title: "This Article's Title goes Here, but not too long.",
            date: "Monday 05, September 2021",
            author: "By Author",
            likes: 86,
            comments: 68,
            imageUrl: "/doctor-profile-1.jpg",
        },
    ];

    return (
        <div className="flex flex-col items-center py-4">
            <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
                News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-6xl">
                {newsArticles.map((article, index) => (
                    <a
                        key={index}
                        href="#"
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="px-4 py-6">
                            <h4 className="text-lg font-semibold text-blue-800">{article.title}</h4>
                            <p className="text-sm text-gray-600 mb-4">{article.date} | {article.author}</p>
                            <div className="flex justify-between items-center text-gray-600">
                                <div className="flex items-center">
                                    <FaHeart className="mr-1" />
                                    <span>{article.likes}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEye className="mr-1" />
                                    <span>{article.comments}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-8">
                <div className="w-3 h-3 rounded-full bg-blue-900 hover:bg-gray-400 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-blue-900 hover:bg-gray-400 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-blue-900 hover:bg-gray-400 cursor-pointer"></div>
            </div>
        </div>
    );
}
