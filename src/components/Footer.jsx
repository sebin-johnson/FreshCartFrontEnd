import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-10 mt-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:justify-between gap-8">

                    {/* Logo and Description */}
                    <div className="md:w-1/3">
                        <div className="flex items-center gap-2 mb-4">
                            <img className="h-14" src={assets.logo} alt="logo" />
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            FreshCart brings the farmer's market to your doorstep.
                            Fresh produce, everyday essentials, and amazing deals - all delivered with care.
                            Experience shopping made simpler, faster, and greener.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col sm:flex-row flex-1 justify-between">

                        {/* Explore */}
                        <div className="mb-6 sm:mb-0">
                            <h6 className="text-gray-900 font-semibold mb-4">Explore</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Home</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">New Arrivals</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Today's Deals</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Categories</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Gift Cards</a></li>
                            </ul>
                        </div>

                        {/* Customer Care */}
                        <div className="mb-6 sm:mb-0">
                            <h6 className="text-gray-900 font-semibold mb-4">Customer Care</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Help Center</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">How to Order</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Track Your Order</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Cancellation & Returns</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Report a Problem</a></li>
                            </ul>
                        </div>

                        {/* Connect With Us */}
                        <div>
                            <h6 className="text-gray-900 font-semibold mb-4">Connect With Us</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Instagram</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Facebook</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Twitter</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">Pinterest</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm">LinkedIn</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-200" />

                {/* Copyright */}
                <div className="text-center text-gray-500 text-xs sm:text-sm">
                    © 2025 FreshCart. Freshness Delivered Daily. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
