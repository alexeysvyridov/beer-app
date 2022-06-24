import { AnyAction } from 'redux'
import { ACTION_TYPES } from '../../actionTypes'
type beerState = {
  beersValues: unknown[],
  isLoading: boolean,
  error?: string,
  query: string,
  favorites: BeersValues[],
}
const initialState:beerState = {
  beersValues: [],
  isLoading: false,
  error: undefined,
  query: '',
  favorites: [],
}
export const beerReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case ACTION_TYPES.GET_BEERS_LOADING: {
       return {
        ...state,
        isLoading: action.payload,
      }
    }
    case ACTION_TYPES.ADD_TO_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
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
    case ACTION_TYPES.GET_BEERS_FAILUR: {
       return {
        ...state,
        error: action.payload,
      }
    }
    case ACTION_TYPES.GET_BEERS_SUCCESS: {
      return {
        ...state,
        beersValues: action.payload,
      }
    }
    case ACTION_TYPES.SEARCH_BEER_SUCCESS: {
      return {
        ...state,
        query: action.payload.food,
      }
    }
    default :
      return state;
  }
}