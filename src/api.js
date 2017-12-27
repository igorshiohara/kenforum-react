import axios from 'axios';

export default {
	user: {
		login: (credentials) =>
			axios.post('/api/auth', {email: credentials.email, password: credentials.password }).then(res => res.data)
	}
}