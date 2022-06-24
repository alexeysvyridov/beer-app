import { AnyAction } from 'redux'
import { ACTION_TYPES } from '../../actionTypes'
type favoriteState = {
  isLoading: boolean,
  error?: string,
  rating: RatingObj[],
  favorites: BeersValues[],
}
const initialState:favoriteState = {
  isLoading: false,
  error: undefined,
  favorites: [],
  rating: [],
}

const addRating = (ratingObj: RatingObj, ratingState: RatingObj[]) => {
  if(ratingState.some((item) => item.id === ratingObj.id)) {
    return ratingState.map((item) => item.id === ratingObj.id ? ratingObj : item);
  }

  return [...ratingState, ratingObj]
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
    case ACTION_TYPES.ADD_RATING: {
      return {
        ...state,
        rating: addRating(action.payload, state.rating),
      }
    }
    default :
      return state;
  }
}