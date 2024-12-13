/* eslint-disable @next/next/no-img-element */
'use client'

export default function CareSection() {
    return (
        <section className="w-full py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    Serving Patients with All Our Heart
                </h2>
                {/* Description */}
                <p className="text-gray-600 mb-6">
                    ZCARE is a leading general clinic dedicated to providing comprehensive healthcare services for all ages. We take pride in applying the most advanced medical techniques, coupled with a team of compassionate doctors, to enhance the quality of life and health of the community.
                </p>
                {/* See More Button */}
                <button className="text-blue-900 font-semibold hover:underline flex items-center gap-2 mx-auto">
                    See More Services <span className="text-lg">→</span>
                </button>
            </div>
            {/* Image */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <img
                    src="/doctor-team.jpg"
                    alt="Doctors dedicated to patient care"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}
