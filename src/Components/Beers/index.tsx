import React from 'react'
import { BeerCards } from './BeerCards'
import { BeersSearchBar } from './BeersSearchBar'
type BeersProps = {
  beers: any // TO DO change type
}
export const Beers = ({
  beers,
}: BeersProps): JSX.Element => {
  return (
    <div>
      <BeersSearchBar />
      <BeerCards beers={beers} />
    </div>
  )
}
