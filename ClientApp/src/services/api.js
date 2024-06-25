import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://mynotes-api-5kga.onrender.com',
})
