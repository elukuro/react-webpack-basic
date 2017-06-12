import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../action/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';
class postIndex extends Component{

	componentDidMount(){
		this.props.fetchPost();
	}

	renderPosts(){
		return _.map(this.props.postsList , post => {
			return(
				<li className="list-item" key={post.id}>
				<Link to={`list/${post.id}`}>
					{post.title}
				</Link>
				</li>
			)
		})
	}
	render(){
		return(
			<div>
				<h1>test post index popular</h1>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
				<img src={require('../images/test-image.png')}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{postsList:state.posts}
}


export default connect(mapStateToProps,{fetchPost})(postIndex);