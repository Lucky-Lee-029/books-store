import { render } from 'react-dom';
import routes from './router/routes';
import './styles/global.sass';


render(routes, document.getElementById('app'));
