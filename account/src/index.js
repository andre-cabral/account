import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import rootReducer from './Root-reducer'
import Routes from './routes';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<Routes />
	</Provider>
	,
	document.getElementById('root')
);
