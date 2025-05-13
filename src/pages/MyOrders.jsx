import React, { useEffect, useState } from 'react';
import { dummyOrders } from '../assets/assets';
import { FiPackage, FiCalendar, FiDollarSign, FiCheckCircle, FiClock } from 'react-icons/fi';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    
    useEffect(() => {
        setTimeout(() => setMyOrders(dummyOrders), 200);
    }, []);

    const statusStyles = {
        Delivered: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Cancelled: 'bg-red-100 text-red-800',
        Shipped: 'bg-blue-100 text-blue-800'
    };

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                        <FiPackage className="text-green-500" />
                        My Orders
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">Your recent purchases and order status</p>
                </div>

                {/* Orders List */}
                {myOrders.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block bg-gray-100 p-8 rounded-full mb-4">
                            <FiPackage className="h-16 w-16 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">No orders found</h3>
                        <p className="mt-2 text-gray-600">Your order history will appear here once you make purchases</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {myOrders.map((order, index) => (
                            <div 
                                key={order._id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                            >
                                {/* Order Header */}
                                <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Order #{order._id.slice(-8).toUpperCase()}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                                            <FiCalendar className="text-gray-400" />
                                            {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[order.status]}`}>
                                        {order.status}
                                    </span>
                                </div>

                                {/* Order Items */}
                                <div className="divide-y divide-gray-200">
                                    {order.items.map((item, itemIndex) => (
                                        <div 
                                            key={itemIndex}
                                            className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            {/* Product Image */}
                                            <div className="flex-shrink-0">
                                                <div className="h-24 w-24 rounded-lg bg-gray-100 p-2 flex items-center justify-center">
                                                    <img 
                                                        src={item.product.image[0]} 
                                                        alt={item.product.name}
                                                        className="h-full w-full object-contain mix-blend-multiply"
                                                    />
                                                </div>
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-lg font-medium text-gray-900 truncate">
                                                    {item.product.name}
                                                </h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Category: {item.product.category}
                                                </p>
                                                <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <FiCheckCircle /> Qty: {item.quantity}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        ₹{(item.product.offerPrice * item.quantity).toLocaleString('en-IN')}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Order Timeline */}
                                            <div className="md:text-right">
                                                <div className="text-sm space-y-1">
                                                    <p className="text-gray-600">
                                                        <span className="font-medium">Payment:</span>{' '}
                                                        <span className={`${order.paymentType === 'Paid' ? 'text-green-600' : 'text-orange-600'}`}>
                                                            {order.paymentType}
                                                        </span>
                                                    </p>
                                                    <p className="text-gray-600">
                                                        <span className="font-medium">Expected Delivery:</span>{' '}
                                                        {new Date(order.deliveryDate).toLocaleDateString('en-IN', {
                                                            weekday: 'short',
                                                            day: 'numeric',
                                                            month: 'short'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Order Footer */}
                                <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                                    <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
                                        <div className="text-lg font-semibold text-gray-900">
                                            Total: ₹{order.amount}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;