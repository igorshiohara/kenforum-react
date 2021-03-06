import React from 'react';
import TopicForm from '../forms/TopicForm';
import api from '../../api';
import PropTypes from 'prop-types';
import HeaderTemplate from "../commons/header";

class NewTopicPage extends React.Component {

	state = {
		topic: {
			title: '',
			description: ''
		}
	};

	addTopic = (topic) => {
		topic.user = localStorage.getItem('loggeduser');
		api.topic.create(topic).then( () => this.props.history.push("/list"));
	}
	
	render() {
		const {topic} = this.state;

		return (
			<div className="ui container">
				<HeaderTemplate title="Create new topic" />
				<TopicForm submit={this.addTopic} topic={topic}/>
			</div>
		);
	}

}

NewTopicPage.propTypes = {
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired
}

export default NewTopicPage;