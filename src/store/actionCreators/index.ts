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