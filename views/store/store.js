import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import authReducer from '../reducer/authReducer';
import cartReducer from '../reducer/cartReducer';
import orderReducer from '../reducer/orderReducer';

//map reducer -> store
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  orders: orderReducer
});

//Tạo store + gán listener cho mỗi lần thay đổi store -> ghi vào json
const store = createStore(rootReducer, applyMiddleware(thunk));
const id = store.getState().auth.id;
if(id) {
  Axios.post('/api/allorder', {id: id}).then((res) => {
    store.dispatch({
      type: 'INIT_ORDERS',
      payload: res.data
    })
  });
}




export default store;
