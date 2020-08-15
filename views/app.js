import React from 'react';
import { render } from 'react-dom';
import Router from './router/routes';
import './styles/global.sass';


render(<Router/>, document.getElementById('app'));
