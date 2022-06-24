import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeAllFavorites } from '../../store/actionCreators'
import { BeerCards } from '../Beers/BeerCards'
import { RemoveFavoriteModal } from './RemoveFavoriteModal'
import { FavoritesContainer, RemoveButton, RemoveButtonWrapper } from './styled'
type FavoritesProps = {
  beers: BeersValues[],
}
export const Favorites = ({
  beers,
}: FavoritesProps): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAllFavorites())
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <FavoritesContainer>
      <RemoveButtonWrapper>
        <RemoveButton
          color="error"
          variant="contained"
          onClick={handleOpenModal}
        >
          Remove all
        </RemoveButton>
      </RemoveButtonWrapper>
      <BeerCards beers={beers} withRaiting />
      {isOpenModal && (
        <RemoveFavoriteModal
          onCloseClick={handleCloseModal}
          onRemoveConfirm={handleRemoveAll}
        />
      )}

    </FavoritesContainer>
  )
}
