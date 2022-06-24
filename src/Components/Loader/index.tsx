import { CircularProgress } from '@mui/material'
import React from 'react'
import { LoaderContainer } from './styled'

export const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  )
}
