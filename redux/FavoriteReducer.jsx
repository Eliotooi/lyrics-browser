import {ADD_FAVORITES} from './Type';
import {REMOVE_FAVORITES} from './Type';

const initialState = {
  list: [],
};

export const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        list: state.list.filter(item => item.track_id !== action.payload),
      };
    default:
      return state;
  }
};
