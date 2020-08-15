import {
    ADD_ITEM,
    REMOVE_ITEM,
    REMOVE_ALL_ITEMS,
  } from '../actions/cart/types';

  const INITIAL_STATE = []
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_ITEM:
            return [ ...state, action.payload]; 
      case REMOVE_ITEM:
          const result = state.filter((item) => {
          return item.id !== action.payload.id;
          });
          return result;
      case REMOVE_ALL_ITEMS:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  