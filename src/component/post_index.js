import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../action/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';


class postIndex extends Component{

	componentDidMount(){
		this.props.fetchPost();
	}

	deleteData(id){
		console.log(id)
		this.props.deletePost(id,() => {
			this.props.history.push('/list');
			this.props.fetchPost();
		})

	}

	renderPosts(){
		return _.map(this.props.postsList , post => {
			return(
				<li className="list-item" key={post.id}>
				<Link to={`list/${post.id}`}>
					{post.title}
				</Link>
				<button onClick={()=>this.deleteData(post.id)}>delete</button>
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


export default connect(mapStateToProps,{fetchPost,deletePost})(postIndex);