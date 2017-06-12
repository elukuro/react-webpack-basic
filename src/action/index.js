
export const POST_FETCH="POST_FETCH";
export const POST_DETAIL="POST_DETAIL";

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
	const detail=axios.get(MAIN_URL+'/posts/'+id+API_KEY);
	return{
		type:POST_DETAIL,
		payload:detail
	}
}