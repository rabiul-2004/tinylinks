import React from "react";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: "800",
});

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const About = () => {
    return (
        <div className="bg-white text-gray-800 py-10 px-6 md:px-16">
            {/* Header */}
            <h1
                className={`text-3xl md:text-4xl font-bold text-center mb-4 ${poppins.className}`}
            >
                About TinyLinks
            </h1>
            <p
                className={`text-center max-w-2xl mx-auto text-base md:text-lg text-gray-600 mb-10 ${roboto.className}`}
            >
                TinyLinks helps you turn long, clunky URLs into short, easy-to-share links —
                without the need for an account. It’s fast, clean, and perfect for personal
                or business use.
            </p>

            {/* Section Grid */}
            <div className="grid gap-8 md:grid-cols-3">
                {/* Mission */}
                <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2 text-blue-800">
                        🎯 Our Mission
                    </h2>
                    <p className={`text-sm text-gray-700 ${roboto.className}`}>
                        To simplify digital communication by making links shorter, cleaner, and
                        more meaningful — all while maintaining privacy and speed.
                    </p>
                </div>

                {/* How It Works */}
                <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2 text-blue-800">
                        ⚙️ How It Works
                    </h2>
                    <p className={`text-sm text-gray-700 ${roboto.className}`}>
                        Paste a long URL, choose a custom alias (optional), and click generate.
                        We instantly create a short URL you can share anywhere.
                    </p>
                </div>

                {/* Benefits */}
                <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2 text-blue-800">
                        🚀 Why Use TinyLinks?
                    </h2>
                    <ul className={`text-sm text-gray-700 list-disc list-inside space-y-1 ${roboto.className}`}>
                        <li>No login required</li>
                        <li>Fully responsive and mobile-friendly</li>
                        <li>Custom short URLs</li>
                        <li>Fast and reliable</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
