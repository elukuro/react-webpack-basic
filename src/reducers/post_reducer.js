import {POST_FETCH} from '../action/index';
import _ from 'lodash';
export default function(state,action){

	switch(action.type){

		case POST_FETCH:
			return _.mapKeys(action.payload.data,'id');
		default:
		return false
	}

}