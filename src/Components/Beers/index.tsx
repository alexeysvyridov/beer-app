import React from 'react'
import { AlertStack } from '../Mui/AlertStack'
import { BeerCards } from './BeerCards'
import { BeerPagination } from './BeerPagination'
import { BeersSearchBar } from './BeersSearchBar'
import { BeersContainer } from './styled'
type BeersProps = {
  beers: BeersValues[],
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
      <BeersContainer>
        <BeersSearchBar />
        <BeerPagination
          onChagePage={onChagePage}
          currentPage={currentPage}
        />
      </BeersContainer>
      {error && (
        <AlertStack error={error} />
      )}
      <BeerCards beers={beers} />
    </div>
  )
}
