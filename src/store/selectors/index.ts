import { useSelector } from "react-redux";
import { RootReducerState } from "../reducers";

type BeersStateSelector = {
  beers: any, // TO DO change type
  isLoading: boolean,
  error?: string,  
}

export const useBeersState = ():BeersStateSelector => {
  return useSelector((state: RootReducerState) => {
    return {
      beers: state.beers.beersValues,
      isLoading: state.beers.isLoading,
      error: state.beers.error,
    }
  })
}