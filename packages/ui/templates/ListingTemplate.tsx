import React from 'react'
import ListingHeader from '../molecules/ListingHeader'
import ListingSummary from '../molecules/ListingSummary'
import ImagesSection from '../organisms/ImagesSection'

const ListingTemplate = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-3 px-4 py-6"> 
        <div className="md:w-1/2 w-full flex flex-col gap-y-3">
            <ListingHeader />
            <ListingSummary />
        </div>
        <div className="md:w-1/2 w-full">
            <ImagesSection />
        </div>
    </div>
  )
}

export default ListingTemplate