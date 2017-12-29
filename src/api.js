import axios from 'axios';

export default {
	user: {
		login: (credentials) =>
			axios.post('/api/auth', {email: credentials.email, password: credentials.password }).then(res => res.data)
	},

	topic: {
		create: (topic) =>
			axios.post('/api/topic', {title: topic.title, description: topic.description, user: topic.user}).then(res => res.data),

		list: () =>
			axios.get('api/topics').then(res => res.data)
	}
}