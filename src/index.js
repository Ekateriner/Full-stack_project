import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {storeFactory} from "./reducers";
import {Provider} from 'react-redux';

// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter } from 'react-router-dom';
// Your routes.js file
import routes from './routes';

const initialState = {};
export const store = storeFactory(initialState);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
