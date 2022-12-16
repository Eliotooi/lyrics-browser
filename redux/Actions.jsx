import { ADD_FAVORITES, REMOVE_FAVORITES } from './Type'
export function removeFavorites (id) {
  return {
    type: REMOVE_FAVORITES,
    payload: id
  }
}
export function addFavorites (item) {
  return {
    type: ADD_FAVORITES,
    payload: item
  }
}
