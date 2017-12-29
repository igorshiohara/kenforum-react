import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Table, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';
import api from "../../api";
import HeaderTemplate from '../commons/header';

class ListPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			topics: []
		};

		this.loadTopics();
	}

	loadTopics = () => {
		api.topic.list().then( (data) => {
			this.setState({topics: data});
		});
	};

	render() {
		const { topics } = this.state;

		return (
			<div className="ui container">

				<HeaderTemplate title="Forum" />

				<Link to="/new-topic">New Topic</Link>

				{ topics ?
					<Table singleLine>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell singleLine></Table.HeaderCell>
								<Table.HeaderCell>Topic</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{ topics.map((topic, index) => {
								return (
									<Table.Row key={index}>
										<Table.Cell collapsing>
											<Image src='/assets/images/user.png' size='mini' circular/>
										</Table.Cell>
										<Table.Cell singleLine> <Link to={`/topic/${topic.id}`}>{topic.title}</Link> </Table.Cell>
									</Table.Row>)
								})}
						</Table.Body>
					</Table>
					:
					<Container>
						<Divider horizontal></Divider>
						<h4>No topics yet</h4>
					</Container>
				}


			</div>
		);
	}
}

ListPage.propTypes = {
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	}
}

export default connect(mapStateToProps, { logout: actions.logout})(ListPage);