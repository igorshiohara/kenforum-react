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
			axios.get('/api/topics').then(res => res.data),

		get: (id) =>
			axios.get('/api/topic/' + id).then(res => res.data)

	},

	comment: {
		create: (obj) =>
			axios.post('/api/comment', { comment: obj.comment, topicId: obj.topicId, userId: obj.userId}).then(res => res.data)
	}
}