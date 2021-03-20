import React from 'react';

import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const middleware = [thunk];



const store = createStore(reducer, compose(applyMiddleware(...middleware)));


ReactDom.render(
		<Provider store={store} >
		    <App />
	    </Provider>,
		document.querySelector('#root')
	);