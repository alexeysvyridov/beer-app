import { ACTION_TYPES } from "../actionTypes";

export const getBeersSuccess = (beers: any) => ({
  type: ACTION_TYPES.GET_BEERS_SUCCESS,
  payload: beers,
})
export const getBeersFailur = (error: string) => ({
  type: ACTION_TYPES.GET_BEERS_FAILUR,
  error,
})
export const getBeersLoading = (isLoading:boolean) => ({
  type: ACTION_TYPES.GET_BEERS_LOADING,
  payload: isLoading,
})

export const getBeersSeerch = (query: string) => ({
  type: ACTION_TYPES.GET_BEERS_LOADING,
  payload: query,
})

export const addToFavorite = (favorite: BeersValues) => ({
  type: ACTION_TYPES.ADD_TO_FAVORITE,
  payload: favorite,
})
export const removeFromFavorite = (favorite: BeersValues) => ({
  type: ACTION_TYPES.REMOVE_FAVORITE,
  payload: favorite,
})
export const fetchFavorite = (favoriteId: string) => ({
  type: ACTION_TYPES.ADD_TO_FAVORITE_FETCH,
  payload: favoriteId,
})