import React from 'react'
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
    <div>
      <button type="button" onClick={handlePrevPage}>Prev</button>
      <button type="button" onClick={handleNextPage}>Next</button>
    </div>
  )
}
