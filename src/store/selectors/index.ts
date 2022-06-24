import { useSelector } from "react-redux";
import { RootReducerState } from "../reducers";

type BeersStateSelector = {
  beers: BeersValues[],
  isLoading: boolean,
  error?: string,
  query: string,
}
export const getBeers = (state: RootReducerState):BeersValues[] => state.beers.beersValues;

export const useBeersState = ():BeersStateSelector => {
  return useSelector((state: RootReducerState) => {
    return {
      beers: state.beers.beersValues,
      isLoading: state.beers.isLoading,
      error: state.beers.error,
      query: state.beers.query,
      favorites: state.favorites.favorites,
    }
  })
}
type FavoritesSelector = {
  favorites: BeersValues[],
}

export const useFavoritesState = ():FavoritesSelector => {
  return useSelector((state: RootReducerState) => {
    return {
      favorites: state.favorites.favorites,
    }
  })
}