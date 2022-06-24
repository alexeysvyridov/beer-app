import { AnyAction } from 'redux'
import { ACTION_TYPES } from '../../actionTypes'
type favoriteState = {
  isLoading: boolean,
  error?: string,
  // raitings: [],
  favorites: BeersValues[],
}
const initialState:favoriteState = {
  isLoading: false,
  error: undefined,
  favorites: [],
}
export const favoriteReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case ACTION_TYPES.ADD_TO_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    }
    case ACTION_TYPES.REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((favorite: BeersValues) => favorite.id !== action.payload.id)
      }
    }
    case ACTION_TYPES.REMOVE_FAVORITE_ALL: {
      return {
        ...state,
        favorites: [],
      }
    }
    default :
      return state;
  }
}