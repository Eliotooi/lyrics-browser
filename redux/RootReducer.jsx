import { combineReducers } from "redux";
import { FavoriteReducer } from "./FavoriteReducer";

export const rootReducer = combineReducers({
    favorites: FavoriteReducer

})