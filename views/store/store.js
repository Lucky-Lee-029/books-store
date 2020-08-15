import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducer/authReducer';
import cartReducer from '../reducer/cartReducer';


const _createUUID = () => {
  let guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  let r = Math.random() * 16 | 0,
  v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}

//map reducer -> store
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

//Tạo store + gán listener cho mỗi lần thay đổi store -> ghi vào json
const store = createStore(rootReducer, {}, applyMiddleware(thunk));



export default store;
