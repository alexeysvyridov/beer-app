import { Button } from '@mui/material'
import React from 'react'
import { ButtonContainer } from './styled'
type BeerPaginationProps = {
  currentPage: number,
  onChagePage: (page: number) => void,
}
export const BeerPagination = ({
  onChagePage,
  currentPage,
}: BeerPaginationProps) => {

  const handleNextPage = () => {
    onChagePage(currentPage + 1)
  }
  const handlePrevPage = () => {
    onChagePage(currentPage - 1)
  }


  return (
    <ButtonContainer>
      <Button variant="outlined" onClick={handlePrevPage}>Prev</Button>
      <Button variant="outlined"
        color="success"
        onClick={handleNextPage}>
        Next
      </Button>
    </ButtonContainer>
  )
}
