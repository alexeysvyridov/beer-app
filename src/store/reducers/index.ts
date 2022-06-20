import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";

const rootReducer = combineReducers({
  beers: beerReducer,
})

export type RootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;