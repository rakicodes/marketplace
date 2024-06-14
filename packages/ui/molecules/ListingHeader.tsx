import React from 'react'

const ListingHeader = () => {
  return (
    <div>
        <span className="text-slate-500 text-sm">Category</span>
        <h1 className="font-bold text-lg">Name</h1>
        <span className="font-bold text-orange-500 text-md">price</span>
    </div>
  )
}

export default ListingHeader