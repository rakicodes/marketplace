import React from 'react'
import OutlineButton from '../atoms/OutlineButton'
import FilledButton from '../atoms/FilledButton'
import { IBuyerHeader } from '../types/props'

const BuyerHeader = ({ toHome, toListings, toSellers }: IBuyerHeader) => {
  return (
    <div className="px-4 md:px-8 py-3 flex justify-between items-center w-full absolute top-0 z-20 bg-white">
    <span onClick={toHome} className="cursor-pointer">Marketplace</span>
    <div className="flex gap-x-2">
        <OutlineButton onClick={toListings}>Listings</OutlineButton>
        <FilledButton>{toSellers}</FilledButton>
    </div>
</div>
)
}

export default BuyerHeader