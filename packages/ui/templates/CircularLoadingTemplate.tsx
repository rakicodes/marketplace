import React from 'react'
import CenteredContentContainer from './container/CenteredContentContainer'
import CircularLoading from '../atoms/CircularLoading'

const CircularLoadingTemplate = () => {
  return (
    <CenteredContentContainer>
        <CircularLoading />
    </CenteredContentContainer>
  )
}

export default CircularLoadingTemplate