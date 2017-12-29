import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid, TextArea} from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class TopicForm extends React.Component {

	state = {
		data: {
			title: this.props.topic.title,
			description: this.props.topic.description,
			creationDate: this.props.topic.creationDate
		},
		loading: false,
		errors: {}
	};

	componentWillReceiveProps(props) {
		this.setState({
			data: {
				title: props.topic.title,
				description: props.topic.description,
				creationDate: props.topic.creationDate
			}
		});
	}

	onChange = e =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.submit(this.state.data);
		}
	};

	validate = data => {
		const errors = {};
		if (!data.title) errors.title = "Can't be blank";
		if (!data.description) errors.authors = "Can't be blank";
		return errors;
	};

	render() {
		const { errors, data, loading } = this.state;

		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>
							<Form.Field error={!!errors.title}>
								<label htmlFor="title">Title</label>
								<input
									type="text"
									id="title"
									name="title"
									placeholder="Title"
									value={data.title}
									onChange={this.onChange}
								/>
								{errors.title && <InlineError text={errors.title} />}
							</Form.Field>

							<Form.Field error={!!errors.description}>
								<label htmlFor="description">Description</label>
								<TextArea autoHeight
									type="text"
									id="description"
									name="description"
									placeholder="Type here what do you like to ask or share"
									value={data.description}
									onChange={this.onChange}
									style={{ minHeight: 100 }}
								/>
								{errors.authors && <InlineError text={errors.authors} />}
							</Form.Field>

						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Button primary>Save</Button>
					</Grid.Row>
				</Grid>
			</Form>
		);
	};

}

TopicForm.propTypes = {
	submit: PropTypes.func.isRequired,
	topic: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		creationDate: PropTypes.instanceOf(Date)
	})
};

export default TopicForm;