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

  const INITIAL_STATE = [
    {
      id: 9772061375,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 0,
      books: []
    },
    {
      id: 9772061376,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 0,
      books: []
    },
    {
      id: 9772061377,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 0,
      books: []
    },
    {
      id: 9772061378,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 0,
      books: []
    },
    {
      id: 9772061379,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 0,
      books: []
    },
    {
      id: 9772061380,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 0,
      books: []
    },
    {
      id: 9772061381,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 1,
      books: []
    },
    {
      id: 9772061382,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 1,
      books: []
    },
    {
      id: 9772061383,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 1,
      books: []
    },
    {
      id: 9772061384,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 1,
      books: []
    },
    {
      id: 9772061385,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 1,
      books: []
    },
    {
      id: 9772061386,
      total: '$88',
      time_start: '1597545054',
      time_end: '1597548539655',
      status: 1,
      books: []
    },
  ]
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_ORDER:
            console.log(action.payload)
            return [ ...state, action.payload]; 
      case REMOVE_ORDER:
          const result = state.filter((item) => {
          return item.id !== action.payload.id;
          });
          return result;
      case CHANGE_STATUS:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  