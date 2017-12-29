import React from 'react'
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

	submit = (data) => {
		this.props.login(data).then( () => this.props.history.push("/list"));
	};

	render() {
		return (
			<div className="login-container">
				<h2 className="text-center">Sign in</h2>
				<LoginForm submit={this.submit}/>
			</div>
		);
	}

}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);