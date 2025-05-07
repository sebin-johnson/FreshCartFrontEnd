import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
    const { products } = useAppContext()
    return (
        <>
            <div className="mt-16 px-4 sm:px-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="text-xl sm:text-2xl md:text-3xl font-medium">Best Sellers</p>
                    <div className="w-16 sm:w-20 h-0.5 rounded-full mt-2 bg-green-600" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full mt-10">
                    {products
                        .filter(product => product.inStock)
                        .slice(0, 4)
                        .map((product, index) => (
                            <div className="flex justify-center" key={index}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default BestSeller
