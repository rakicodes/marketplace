import React from 'react'
import AddListingForm from '../organisms/AddListingForm'
import CenteredContentContainer from './container/CenteredContentContainer'

const AddListingTemplate = () => {
  return (
    <CenteredContentContainer>
      <div className="flex flex-col p-10 md:p-8 gap-y-10 bg-white rounded">
        <h1 className="text-xl font-bold">Add a listing</h1>
        <AddListingForm />
      </div>
    </CenteredContentContainer>
  )
}

export default AddListingTemplate