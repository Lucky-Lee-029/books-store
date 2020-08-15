import React, {useContext } from 'react';
import {BrowserRouter} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import { Provider } from 'react-redux';
import { AuthContext} from '../context/auth';
import App from '../components/App/index';
import store from '../store/store';
const Router = (props) => {
  const authorization = useContext(AuthContext);
    return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContext.Provider value={authorization}>
          <App>
              <PrivateRoutes/>
          </App>
        </AuthContext.Provider>
      </BrowserRouter>
    </Provider>
    );
}

export default Router
