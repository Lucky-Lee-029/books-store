import {
    SET_AUTH, DELETE_AUTH
  } from '../actions/auth/types';
import jwt from 'jwt-simple';
import Axios from 'axios';
import {store} from '../store/store'
const auth = localStorage.getItem('token')
   ? JSON.parse(localStorage.getItem('token'))
   : false;
let accessToken;
if(Date.now() - auth.timestamp < 10800000) {
  accessToken = auth.accessToken;
}
else {
  accessToken = null;
}


// export default function(state = initialState, action) {
// switch (action.type) {
// case actionTypes.FETCH_LOGIN_SUCCESS:

// }
const INITIAL_STATE =  {
    accessToken: accessToken ? accessToken : null,
    id: accessToken
    ? jwt.decode(accessToken,'xxx').id
    : null,
    role: accessToken
      ? jwt.decode(accessToken,'xxx').role
      : null
 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_AUTH:
        const data = jwt.decode(action.payload,'xxx');
        if( data.role!= 0) {
            let token = { accessToken: action.payload, timestamp: Date.now()};
            localStorage.setItem('token', JSON.stringify(token));
            Axios.post('/api/allorder', {id: data.id}).then((res) => {
              store.dispatch({
                type: 'INIT_ORDERS',
                payload: res.data
              })
            });
            return {
                accessToken: action.payload,
                id: data.id,
                role: data.role
            };
        }
        else {
            return {
                accessToken: null,
                id: null,
                role: 0
            }
        }
      case DELETE_AUTH:
        localStorage.removeItem('token');
        return {
          accessToken: null,
          id: null,
          role: 0
        }
      default:
        return state;
    }
  }
  