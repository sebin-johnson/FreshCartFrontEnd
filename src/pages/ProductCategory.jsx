import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {
    const { products } = useAppContext()
    const { category } = useParams()
    const searchCategory = categories.find((item) => item.path.toLowerCase() === category)
    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)
    return (
        <>
            <div className='mt-16 flex flex-col md:justify-center'>
                {
                    searchCategory && (
                        <div className='flex flex-col items-end w-max'>
                            <p className='text-2xl font-medium uppercase'>{searchCategory.text.toUpperCase()}</p>
                            <div className='h-0.5 w-16 bg-green-500 rounded-full'></div>
                        </div>
                    )
                }
                {
                    filteredProducts.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full mt-10'>
                            {
                                filteredProducts.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className='flex items-center justify-center h-[60vh]'>
                            <p className='text-2xl font-medium text-green-500'>No products found in this category</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ProductCategory
