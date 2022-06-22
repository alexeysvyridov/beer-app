import React, { useState } from 'react'
import { BeerModal } from '../../BeerModal';
import { BeerCardItem } from './BeerCardItem';
import { CardsContainer } from './styled'

type BeerCardsProps = {
  beers: any;
}
export const BeerCards = ({
  beers,
}: BeerCardsProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <CardsContainer>
      {beers.map((beer: any) => {
        return (
          <BeerCardItem
            imageUrl={beer.image_url}
            name={beer.name}
            isFavorite
            onOpenClick={handleOpen}
          />
        )
      })}
      {isOpen && (
        <BeerModal
          isOpen={isOpen}
          onCloseClick={handleClose}
        />
      )}
    </CardsContainer>
  )
}
