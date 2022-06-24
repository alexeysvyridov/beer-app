import { AnyAction } from 'redux'
import { ACTION_TYPES } from '../../actionTypes'
type favoriteState = {
  isLoading: boolean,
  error?: string,
  // raitings: [],
}
const initialState:favoriteState = {
  isLoading: false,
  error: undefined,
}
export const favoriteReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    default :
      return state;
  }
}