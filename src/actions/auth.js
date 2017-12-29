import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});

export const login = (credentials) => (dispatch) =>
	//api.user.login(credentials).then(res => res.data.user);
	api.user.login(credentials).then(user => {
		localStorage.loggeduser = JSON.stringify(user);
		localStorage.kenforumJWT = user.token;
		dispatch(userLoggedIn(user));
	});

export const logout = () => dispatch => {
		localStorage.removeItem('kenforumJWT');
		localStorage.removeItem('loggeduser');
		dispatch(userLoggedOut());
	};