import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAllFavorites } from '../../store/actionCreators'
import { Beers } from '../Beers'
import { BeerCards } from '../Beers/BeerCards'
import { FavoritesContainer, RemoveButton, RemoveButtonWrapper } from './styled'
type FavoritesProps = {
  beers: BeersValues[],
}
export const Favorites = ({
  beers,
}: FavoritesProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAllFavorites())
  }

  return (
    <FavoritesContainer>
      <RemoveButtonWrapper>
        <RemoveButton
          color="error"
          variant="contained"
          onClick={handleRemoveAll}
        >
          Remove all
        </RemoveButton>
      </RemoveButtonWrapper>
      <BeerCards beers={beers} withRaiting />
    </FavoritesContainer>
  )
}
