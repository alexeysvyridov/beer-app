import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
  beers: beerReducer,
  favorites: favoriteReducer,
})

export type RootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;