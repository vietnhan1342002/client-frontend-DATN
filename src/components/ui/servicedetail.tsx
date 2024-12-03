/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Define props for the ServiceDetail component
interface ServiceDetailProps {

    cards: Array<{
        image: string;
        title: string;
        description: string;
    }>;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ cards }) => {
    return (
        <div className="py-8 px-4">

            <div className="flex flex-wrap justify-between gap-8">
                {cards.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-blue-600">{card.title}</h2>
                                <p className="text-gray-600 mt-2">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDetail;
