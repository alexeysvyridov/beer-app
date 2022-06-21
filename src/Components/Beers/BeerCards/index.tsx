import React from 'react'
import { BeerCardItem } from './BeerCardItem';
import { CardsContainer } from './styled'

type BeerCardsProps = {
  beers: any;
}
export const BeerCards = ({
  beers,
}: BeerCardsProps): JSX.Element => {
  return (
    <CardsContainer>
      {beers.map((beer: any) => {
        return (
          <BeerCardItem
            imageUrl={beer.image_url}
            name={beer.name}
            isFavorite
          />
        )
      })}
    </CardsContainer>
  )
}
