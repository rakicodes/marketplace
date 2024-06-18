import React from 'react'
import CategoryCard from '../../molecules/CategoryCard'
import { ICategoryContainer } from '../../types/props'

const CategoryContainer = ({ categories, linkTo }: ICategoryContainer) => {
  return (
    <div className="flex gap-x-5 overflow-x-auto h-24">
        {
          categories.map((category: string, i: number) => (
            <CategoryCard key={i} category={category} onClick={() => linkTo(category)} />
          ))
        }
    </div>
  )
}

export default CategoryContainer