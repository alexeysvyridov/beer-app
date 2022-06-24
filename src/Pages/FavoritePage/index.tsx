import React from 'react'
import { BeerCards } from '../../Components/Beers/BeerCards';
import { Favorites } from '../../Components/Favorites';
import { useBeersState } from '../../store/selectors'

export const FavoritePage = (): JSX.Element => {
  const { favorites } = useBeersState();

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
