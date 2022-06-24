import React from 'react'
import { AlertStack } from '../Mui/AlertStack'
import { BeerCards } from './BeerCards'
import { BeerPagination } from './BeerPagination'
import { BeersSearchBar } from './BeersSearchBar'
type BeersProps = {
  beers: any // TO DO change type
  currentPage: number,
  onChagePage: (page: number) => void,
  error?: string,
}
export const Beers = ({
  beers,
  currentPage,
  onChagePage,
  error,
}: BeersProps): JSX.Element => {

  return (
    <div>
      <div>
        <BeerPagination
          onChagePage={onChagePage}
          currentPage={currentPage}
        />
        <BeersSearchBar />
      </div>
      {error && (
        <AlertStack error={error} />
      )}
      <BeerCards beers={beers} />
    </div>
  )
}
