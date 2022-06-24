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
  const [selectedBeer, setSelectedBeer] = useState(null);

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
    setSelectedBeer(null)
  }
  const handleSetSelectedBeerse = (beer: any) => {
    setSelectedBeer(beer)
  }

  return (
    <CardsContainer>
      {beers.map((beer: any) => {
        return (
          <BeerCardItem
            key={beer.id}
            imageUrl={beer.image_url}
            name={beer.name}
            isFavorite
            onOpenClick={() => {
              handleOpen()
              handleSetSelectedBeerse(beer)
            }}
          />
        )
      })}
      {isOpen && (
        <BeerModal
          isOpen={isOpen}
          onCloseClick={handleClose}
          selectedBeer={selectedBeer}
        />
      )}
    </CardsContainer>
  )
}
