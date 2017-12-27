import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/auth';

const ListPage = ({ isAuthenticated, logout }) => (

	<div>
		<h1>List Page</h1>
		{isAuthenticated ? <button onClick={() => logout}>Logout</button> : <Link to="/login">Login</Link>}
		<Link to="/post">Post</Link>
		<Button primary>OK</Button>
	</div>
);

ListPage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	}
}

export default connect(mapStateToProps, { logout: actions.logout})(ListPage);