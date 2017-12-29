import React from 'react';
import { Divider, Button, Comment, Form, Header } from 'semantic-ui-react';

class TopicPage extends React.Component {

	render() {
		return (
			<div className="ui container">
				<h1>This is a topic</h1>
				<Divider horizontal></Divider>

				<Comment.Group>
					<Header as='h3' dividing>Comments</Header>

					<Comment>
						<Comment.Avatar src='/assets/images/user.png' />
						<Comment.Content>
							<Comment.Author as='a'>Matt</Comment.Author>
							<Comment.Metadata>
								<div>Today at 5:42PM</div>
							</Comment.Metadata>
							<Comment.Text>How artistic!</Comment.Text>
						</Comment.Content>
					</Comment>

					<Comment>
						<Comment.Avatar src='/assets/images/user.png' />
						<Comment.Content>
							<Comment.Author as='a'>Elliot Fu</Comment.Author>
							<Comment.Metadata>
								<div>Yesterday at 12:30AM</div>
							</Comment.Metadata>
							<Comment.Text>
								<p>This has been very useful for my research. Thanks as well!</p>
							</Comment.Text>
						</Comment.Content>
					</Comment>

					<Comment>
						<Comment.Avatar src='/assets/images/user.png' />
						<Comment.Content>
							<Comment.Author as='a'>Joe Henderson</Comment.Author>
							<Comment.Metadata>
								<div>5 days ago</div>
							</Comment.Metadata>
							<Comment.Text>
								Dude, this is awesome. Thanks so much
							</Comment.Text>
						</Comment.Content>
					</Comment>

					<Form reply>
						<Form.TextArea />
						<Button content='Add Reply' labelPosition='left' icon='edit' primary />
					</Form>
				</Comment.Group>
			</div>
		);
	}

}

export default TopicPage;