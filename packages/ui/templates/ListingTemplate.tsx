import React from 'react'
import ListingHeader from '../molecules/ListingHeader'
import ListingSummary from '../molecules/ListingSummary'
import ImagesSection from '../organisms/ImagesSection'
import CenteredContentContainer from './container/CenteredContentContainer'
import { IListing } from '../types/data'
import { ICardImage } from '../types/props'
import { imagesToCardImage } from '../utils/convert'

const ListingTemplate = ({ category, name, price, listingId, warranty, isCertified, isUsed, make, images, serialNumber, numOfUnits, packageType, year }: IListing) => {  
  return (
    <CenteredContentContainer>
      <div className="pt-20 pb-10 w-full">
        <div className="flex flex-wrap md:flex-nowrap gap-3 px-0 md:px-8 py-6 w-full"> 
          <div className="md:w-1/2 w-full flex flex-col gap-y-3">
              <ListingHeader category={category} name={name} price={price} />
              <ListingSummary listingId={listingId} make={make} serialNumber={serialNumber} numOfUnits={numOfUnits} packageType={packageType} year={year}/>
          </div>
          <div className="md:w-1/2 w-full">
              <ImagesSection images={imagesToCardImage(images, name)} />
          </div>
        </div>
      </div>
    </CenteredContentContainer>
    
  )
}

export default ListingTemplate