import axios from 'axios';

const instance = axios.create( {
	baseURL: 'https://hackathonapp-f0808.firebaseio.com/'
});

export default instance;
