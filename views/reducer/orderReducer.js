const _createUUID = () => {
    let guid = 'xxyxyx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0,
    v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return guid;
}
import {
    ADD_ORDER,
    REMOVE_ORDER,
    CHANGE_STATUS,
  } from '../actions/order/types';



  const INITIAL_STATE = [];
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'INIT_ORDERS': {
          return action.payload;
      }  
      case ADD_ORDER:
            return [ ...state, action.payload]; 
      case REMOVE_ORDER:
          const result = state.filter((item) => {
          return item.id !== action.payload.id;
          });
          return result;
      case CHANGE_STATUS:
          return state.map((item) => {
              if(item.id === action.payload.id) item.status = action.payload.status; 
              if(action.payload.status === 2) item.time_end = Date.now();
              console.log(item)
              return item;
          });
      default:
        return state;
    }
  }
  