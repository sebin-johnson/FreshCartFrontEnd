import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
    const { products, searchQuery } = useAppContext()
    const [filterdProducts, setFilterdProducts] = useState([])

    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilterdProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        } else {
            setFilterdProducts(products)
        }
    }, [products, searchQuery])

    return (
        <>
            <div className="mt-16 px-4 sm:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 relative inline-block">
                        All Products
                    </h2>
                </div>
            </div>

            <div className="w-full flex justify-center mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {
                        filterdProducts.filter((product) => product.inStock).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllProducts
