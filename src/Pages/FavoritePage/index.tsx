import React from 'react'
import { Favorites } from '../../Components/Favorites';
import { useFavoritesState } from '../../store/selectors'

export const FavoritePage = (): JSX.Element => {
  const { favorites } = useFavoritesState();

  if (favorites.length === 0) {
    return (
      <div>No Favorites</div>
    )
  }

  return (
    <Favorites
      beers={favorites}
    />
  )
}
