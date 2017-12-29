import React from 'react';
import { Container, Button, Comment, Form} from 'semantic-ui-react';
import api from "../../api";
import HeaderTemplate from '../commons/header';
import { Link } from 'react-router-dom';

class TopicPage extends React.Component {

	componentDidMount() {
		this.loadTopic(this.props.match.params.id);
	}

	state = {
		topic: {
			comments: []
		},
		comment: ''
	};

	loadTopic = (id) => {
		api.topic.get(id).then( (data) =>
			this.setState({topic :data})
		);
	};

	comment = () => {
		console.log('Commenting: ' + this.state.comment);

		const { topic, comment } = this.state;

		let commentObj = {};
		commentObj.comment = comment;
		commentObj.userId = JSON.parse(localStorage.getItem('loggeduser')).id;
		commentObj.topicId = this.props.match.params.id;

		console.log('Sending comment to server: ' + JSON.stringify(commentObj));
		api.comment.create(commentObj).then( () => {
			console.log('Comment created: ' + JSON.stringify(topic));
			this.loadTopic(this.props.match.params.id);
		})
	};

	onChange = e => {
		this.setState({
			comment: e.target.value
		});
	};

	render() {
		const { topic } = this.state;

		return (
			<div className="ui container">
				<HeaderTemplate title={topic.title} />

				<Container textAlign="left">
					<span>{topic.description}</span>
				</Container>

				<Comment.Group>
					<Comment>
						<Comment.Avatar src='/assets/images/user.png' />
						<Comment.Content>
							<Comment.Author as='a'>Matt</Comment.Author>
							<Comment.Metadata>
								<div>Just now</div>
							</Comment.Metadata>
							<Comment.Text>How artistic!</Comment.Text>
						</Comment.Content>
					</Comment>

					<Form reply>
						<Form.TextArea onChange={this.onChange}/>
						<Button onClick={ this.comment } content='Add Reply' labelPosition='left' icon='edit' primary />
					</Form>
				</Comment.Group>
				<Link to="/list">Back to topics</Link>
			</div>
		);
	}

}

export default TopicPage;