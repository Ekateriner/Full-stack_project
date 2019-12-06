import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {USER_STATUS} from "./constants";
import MainRouter from "./routers";
import {storeFactory} from "./reducers";
import {Provider} from 'react-redux';

const initialState = {
    user: {
        login: "",
        email: "",
        avatar: null,
        status: USER_STATUS.NOT_AUTH,
        first_name: "",
        last_name: "",
        group: "",
    },
    board: [],
};


const store = storeFactory(initialState);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <MainRouter/>
    </BrowserRouter>
    </Provider>,
document.getElementById('root'));
