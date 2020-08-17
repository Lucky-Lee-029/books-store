import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import authReducer from '../reducer/authReducer';
import cartReducer from '../reducer/cartReducer';
import orderReducer from '../reducer/orderReducer';
import localForage from 'localforage';
import { persistStore, persistReducer } from 'redux-persist';
const localDB = localForage.createInstance({
  name: "Book-data"
});

const persistConfig = {
  key: 'root',
  storage: localDB,
  blacklist: 'auth'
}
//map reducer -> store
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  orders: orderReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
//Tạo store + gán listener cho mỗi lần thay đổi store -> ghi vào json
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
const id = store.getState().auth.id;
if(id) {
  Axios.post('/api/allorder', {id: id}).then((res) => {
    store.dispatch({
      type: 'INIT_ORDERS',
      payload: res.data
    })
  });
}




export {store, persistor};
