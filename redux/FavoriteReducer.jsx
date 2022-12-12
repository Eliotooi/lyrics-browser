import { ADD_FAVORITES } from "./Type"
import {REMOVE_FAVORITES} from "./Type"

const initialState = {
    favorites: [],
}

export const FavoriteReducer = (state=initialState, action) =>{
    switch(action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.id !== action.payload),
            }
        default: 
            return state
    }
}
