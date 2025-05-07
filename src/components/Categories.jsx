import React from 'react'
import { useAppContext } from '../context/AppContext'
import { categories } from '../assets/assets'

const Categories = () => {
    const { navigate } = useAppContext()
    return (
        <>
            <div className="mt-16 px-4 sm:px-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-medium">Categories</p>
                    <div className="w-16 sm:w-20 h-0.5 rounded-full mt-2 bg-green-600" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group px-3 py-5 cursor-pointer flex flex-col justify-center items-center gap-2 rounded-lg"
                        >
                            <img
                                src={category.image}
                                alt={category.text}
                                className="group-hover:scale-105 transition max-w-28"
                                style={{ backgroundColor: category.bgColor }}
                                onClick={() => {
                                    navigate(`/products/${category.path.toLowerCase()}`)
                                    scrollTo(0, 0)
                                }}
                            />
                            <p className="text-sm font-medium">{category.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Categories
