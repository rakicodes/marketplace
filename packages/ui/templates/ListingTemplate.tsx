import React from 'react'
import ListingHeader from '../molecules/ListingHeader'
import ListingSummary from '../molecules/ListingSummary'
import ImagesSection from '../organisms/ImagesSection'
import CenteredContentContainer from './container/CenteredContentContainer'

const ListingTemplate = () => {
  return (
    <CenteredContentContainer>
      <div className="pt-20 pb-10 w-full">
        <div className="flex flex-wrap md:flex-nowrap gap-3 px-0 md:px-8 py-6 w-full"> 
          <div className="md:w-1/2 w-full flex flex-col gap-y-3">
              <ListingHeader />
              <ListingSummary />
          </div>
          <div className="md:w-1/2 w-full">
              <ImagesSection />
          </div>
        </div>
      </div>
    </CenteredContentContainer>
    
  )
}

export default ListingTemplate