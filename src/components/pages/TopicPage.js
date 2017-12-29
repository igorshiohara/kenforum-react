import React from 'react';
import { Container, Button, Comment, Form, Segment} from 'semantic-ui-react';
import api from "../../api";
import HeaderTemplate from '../commons/header';
import { Link } from 'react-router-dom';
import Moment from 'moment';

class TopicPage extends React.Component {

	componentDidMount() {
		this.loadTopic(this.props.match.params.id);
	}

	state = {
		topic: {},
		comment: ''
	};

	loadTopic = (id) => {
		api.comment.get(id).then( (comments) => {
			let newTopic = Object.assign({}, this.state.topic);
			newTopic.comments = comments;
			this.setState({topic : newTopic});
		});

		api.topic.get(id).then( (data) => {
			this.setState({topic : data});
		});

	};

	comment = () => {
		const { comment } = this.state;

		let commentObj = {};
		commentObj.comment = comment;
		commentObj.userId = JSON.parse(localStorage.getItem('loggeduser')).id;
		commentObj.topicId = this.props.match.params.id;

		api.comment.create(commentObj).then( () => {
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
					{topic && topic.comments && topic.comments.map( (c, index) => {
						return (
							<Segment key={index}>
								<Comment>
									<Comment.Avatar src='/assets/images/user.png' />
									<Comment.Content>
										<Comment.Author as='a'>{c.user.name}</Comment.Author>
										<Comment.Metadata>
											<div>{Moment(c.creationDate).fromNow()}</div>
										</Comment.Metadata>
										<Comment.Text>{c.comment}</Comment.Text>
									</Comment.Content>
								</Comment>
							</Segment>
						)
					})}

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