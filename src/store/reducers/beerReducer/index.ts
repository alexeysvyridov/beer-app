import { AnyAction } from 'redux'
import { ACTION_TYPES } from '../../actionTypes'
type beerState = {
  beersValues: unknown[],
  isLoading: boolean,
  error?: string,
}
const initialState:beerState = {
  beersValues: [],
  isLoading: false,
  error: undefined,
}
export const beerReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case ACTION_TYPES.GET_BEERS_SUCCESS: {
      return {
        ...state,
        beersValues: action.payload,
      }
    }
  }
}