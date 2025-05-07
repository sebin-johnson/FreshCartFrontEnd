import React, { useEffect, useState } from 'react'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const fetchMyOrders = async () => {
        setMyOrders(dummyOrders)
    }
    useEffect(() => {
        fetchMyOrders()
    }, [])
    return (
        <>
            <div className='mt-16 pb-16'>
                <div className='flex flex-col items-end w-max mb-8'>
                    <p className='text-2xl font-medium uppercase'>My Orders</p>
                    <div className='w-16 h-0.5 bg-green-500 rounded-full md:ml-auto'></div>
                </div>
                <div className='flex flex-col gap-10'>
                    {myOrders.map((order, index) => (
                        <div className='border border-gray-300 rounded-lg p-4 py-5 max-w-4xl w-full' key={index}>
                            <div className='flex flex-col md:flex-row md:justify-between text-gray-600 md:items-center gap-2 mb-4'>
                                <span><strong>Order ID:</strong> {order._id}</span>
                                <span><strong>Payment:</strong> {order.paymentType}</span>
                                <span><strong>Total Amount:</strong> ₹{order.amount}</span>
                            </div>
                            {order.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`relative text-gray-500/70 bg-white ${order.items.length - 1 !== itemIndex ? 'border-b' : ''
                                        } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}>
                                    <div className='flex items-center mb-4 md:mb-0'>
                                        <div className='bg-green-500/10 p-4 rounded-lg'>
                                            <img src={item.product.image[0]} className='w-16 h-16 object-cover' alt={item.product.name} />
                                        </div>
                                        <div className='ml-4'>
                                            <h2 className='text-xl font-medium text-gray-500'>{item.product.name}</h2>
                                            <p>Category: {item.product.category}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                                        <p>Quantity: {item.quantity || "1"}</p>
                                        <p>Status: {item.status}</p>
                                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <p className='text-green-400 text-lg font-medium'>
                                        Amount: ₹{item.product.offerPrice * item.quantity}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyOrders
