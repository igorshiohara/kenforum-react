import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';

class ListPage extends React.Component {

	render() {
		const { isAuthenticated, logout  } = this.prop;

		return (
			<div className="ui container">
				<h1>List Page</h1>
				{isAuthenticated ? <button onClick={() => logout}>Logout</button> : <Link to="/login">Login</Link>}
				<Link to="/new-topic">New Topic</Link>

				<Table singleLine>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell singleLine>User</Table.HeaderCell>
							<Table.HeaderCell>Topic</Table.HeaderCell>
							<Table.HeaderCell>Number of comments</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Image src='/assets/images/user.png' size='mini' circular />
							</Table.Cell>
							<Table.Cell singleLine>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
								variability in this increase, however, with some nonresponders.
							</Table.Cell>
							<Table.Cell textAlign='center'>
								2
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Image src='/assets/images/user.png' size='mini' circular />
							</Table.Cell>
							<Table.Cell singleLine>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
								variability in this increase, however, with some nonresponders.
							</Table.Cell>
							<Table.Cell textAlign='center'>
								6
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

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