import React from 'react'
import { useAppContext } from '../context/AppContext'
import { categories } from '../assets/assets'

const Categories = () => {
    const { navigate } = useAppContext()

    return (
        <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
                    Explore Categories
                </h2>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`)
                            window.scrollTo(0, 0)
                        }}
                    >
                        {/* Category Image */}
                        <div className="relative aspect-square w-full flex items-center justify-center p-4">
                            <div 
                                className="absolute inset-0 rounded-xl opacity-10 transition-opacity group-hover:opacity-20"
                                style={{ backgroundColor: category.bgColor }}
                            />
                            <img
                                src={category.image}
                                alt={category.text}
                                className="w-full h-auto max-w-[80px] group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Category Text */}
                        <div className="mt-4 text-center">
                            <p className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                                {category.text}
                            </p>
                            <span className="inline-block h-0.5 w-0 bg-green-500 group-hover:w-8 transition-all duration-300 mt-1" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Categories