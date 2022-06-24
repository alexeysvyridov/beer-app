import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../../store/actionCreators';
import { useFavoritesState } from '../../../store/selectors';
import { BeerModal } from '../../BeerModal';
import { BeerCardItem } from './BeerCardItem';
import { CardsContainer } from './styled'

type BeerCardsProps = {
  beers: BeersValues[];
  withRaiting?: boolean,
}
export const BeerCards = ({
  beers,
  withRaiting,
}: BeerCardsProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const { favorites } = useFavoritesState();
  const dispatch = useDispatch();
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

  const handleAddToFavorite = (beer: BeersValues) => {
    dispatch(addToFavorite(beer))
  }
  const handleRemoveFromFavorite = (beer: BeersValues) => {
    dispatch(removeFromFavorite(beer))
  }

  const checkIfFavorite = (beersValues: BeersValues) => {
    return favorites.some((beer) => beer?.id === beersValues.id)
  }

  return (
    <CardsContainer>
      {beers.map((beer: any) => {
        return (
          <BeerCardItem
            key={beer.id}
            onAddToFavorite={(e: React.FormEvent) => {
              e.stopPropagation()
              handleAddToFavorite(beer)
            }}
            onRemoveFavorite={(e: React.FormEvent) => {
              e.stopPropagation()
              console.log('call')
              handleRemoveFromFavorite(beer)
            }}
            imageUrl={beer.image_url}
            withRaiting={withRaiting}
            name={beer.name}
            isFavorite={checkIfFavorite(beer)}
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

BeerCards.defaultProps = {
  withRaiting: false,
}