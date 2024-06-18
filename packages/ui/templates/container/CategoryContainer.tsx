import React from 'react'
import CategoryCard from '../../molecules/CategoryCard'

const CategoryContainer = () => {
  return (
    <div className="flex gap-x-5 overflow-x-auto h-24">
        <CategoryCard category="option" onClick={() => console.log()} />
        <CategoryCard category="option 1" onClick={() => console.log()} />
        <CategoryCard category="option 2" onClick={() => console.log()} />
        <CategoryCard category="option 3" onClick={() => console.log()} />
        <CategoryCard category="option 4" onClick={() => console.log()} />
        <CategoryCard category="option 5" onClick={() => console.log()} />
    </div>
  )
}

export default CategoryContainer