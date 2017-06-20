import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {newPost} from '../action/';

class New extends Component{

	constructor(state){
		super(state);
		this.state={
		  "title": "",
		  "categories":"",
		  "content":""
		}
	}

	generateNew(){
		const data={
		  "title":this.state.title,
		  "categories":this.state.categories,
		  "content": this.state.content,
		}

		this.props.newPost(data,()=>{
			this.props.history.push('/list');
		});
	}

	onSubmit(event){
		event.preventDefault();
		this.generateNew()
	}

	render(){
		return(
			<div className="row">
				<div className="col-md-4">
					<form onSubmit={(event)=>this.onSubmit(event)}>
						<label>title</label>
						<input className="form-control" type="text" name="title" value={this.state.title} onChange={(event)=>this.setState({'title':event.target.value})} />
						<label>content</label>
						<input className="form-control" type="text" name="content" value={this.state.content} onChange={(event)=>this.setState({'content':event.target.value})} />
						<label>categories</label>
						<input className="form-control" type="text" name="categories" value={this.state.categories} onChange={(event)=>this.setState({'categories':event.target.value})} />
						<button className="btn btn-primary" type="submit"> click here to make new</button>
					</form>
				</div>
			</div>
		)
	}
}

export default connect(null,{newPost})(New);