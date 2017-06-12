import React , {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {detailPost} from '../action/index';

class postShow extends Component{

	componentDidMount(){
			const {id}=this.props.match.params;
			this.props.detailPost(id);
	}

	renderData(){
		const data=this.props.postsList;
		return(
			<div>
				<p>title {data.title}</p>
				<p>content {data.content}</p>
				<p>categories {data.categories}</p>
			</div>
		)

	}

	render(){
		return(
			<div>
				<p>post show</p>
				{this.renderData()}
				<Link to="/list">back</Link>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		postsList:state.posts
	}
}

export default connect(mapStateToProps,{detailPost})(postShow);