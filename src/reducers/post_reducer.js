import {POST_FETCH,POST_DETAIL,DELETE_POST} from '../action/index';
import _ from 'lodash';
export default function(state={},action){

	switch(action.type){

		case POST_FETCH:
			return _.mapKeys(action.payload.data,'id');

		case POST_DETAIL:
			return action.payload.data;

		default:
		return false
	}

}