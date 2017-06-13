
export const POST_FETCH="POST_FETCH";
export const POST_DETAIL="POST_DETAIL";
export const DELETE_POST="DELETE_POST";


const MAIN_URL="http://reduxblog.herokuapp.com/api";
const API_KEY="?key=hominahominahominahomina";
import axios from 'axios';

export function fetchPost(){
	const request=axios.get(MAIN_URL+'/posts/'+API_KEY);
	return{
		type:POST_FETCH,
		payload:request
	}
}

export function detailPost(id){
	const request=axios.get(MAIN_URL+'/posts/'+id+API_KEY);
	return{
		type:POST_DETAIL,
		payload:request
	}
}

export function deletePost(id,callback){
	const request=axios.delete(MAIN_URL+'/posts/'+id+API_KEY).then(
		() => callback()
	);

	return{
		type:DELETE_POST,
		payload:request
	}
}