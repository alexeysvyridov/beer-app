import React from 'react'
import { BeerCards } from './BeerCards'
import { BeersSearchBar } from './BeersSearchBar'
type BeersProps = {
  beers: any // TO DO change type
  currentPage: number,
  onChagePage: (page: number) => void,
}
export const Beers = ({
  beers,
  currentPage,
  onChagePage,
}: BeersProps): JSX.Element => {
  const handleNextPage = () => {
    onChagePage(currentPage + 1)
  }
  const handlePrevPage = () => {
    onChagePage(currentPage - 1)
  }

  return (
    <div>
      <div>
        <button type="button" onClick={handlePrevPage}>Prev</button>
        <button type="button" onClick={handleNextPage}>Next</button>
      </div>
      <BeersSearchBar />
      <BeerCards beers={beers} />

    </div>
  )
}
