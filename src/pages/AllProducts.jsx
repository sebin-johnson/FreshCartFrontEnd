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
                <div className="flex flex-col items-center sm:items-start text-center sm:text-right w-full">
                    <p className="text-2xl font-medium uppercase">All products</p>
                    <div className="h-0.5 w-16 sm:w-20 bg-green-500 rounded-full mt-2 mx-auto sm:mx-0"></div>
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
