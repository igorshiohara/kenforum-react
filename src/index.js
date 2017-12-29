import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoggedIn} from "./actions/auth";
import {Route} from 'react-router-dom';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.kenforumJWT) {
	const user = { token: localStorage.kenforumJWT};
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(

	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root')
);
registerServiceWorker();
