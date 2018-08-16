import axios from 'axios';
import { FETCH_MENU } from '../constants';

export function fetchMenu(){

	const response = axios.get('https://jsonplaceholder.typicode.com/comments');

	return {
		type: FETCH_MENU,
		payload: response
	};
}
