import React from 'react'
import { IListingHeader } from '../types/props'

const ListingHeader = ({ category, name, price }: IListingHeader) => {
  return (
    <div>
        <span className="text-slate-500 text-sm">{category}</span>
        <h1 className="font-bold text-lg">{name}</h1>
        <span className="font-bold text-orange-500 text-md">${price}</span>
    </div>
  )
}

export default ListingHeader