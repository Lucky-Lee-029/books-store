import React, {useContext } from 'react';
import {BrowserRouter} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import { Provider } from 'react-redux';
import { AuthContext} from '../context/auth';
import App from '../components/App/index';
import {store, persistor} from '../store/store';
import { PersistGate } from 'redux-persist/integration/react'
const Router = (props) => {
  const authorization = useContext(AuthContext);
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AuthContext.Provider value={authorization}>
            <App>
                <PrivateRoutes/>
            </App>
          </AuthContext.Provider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    );
}

export default Router
