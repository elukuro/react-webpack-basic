import React, {Component} from 'react';
import axios from 'axios';

class New extends Component{

	constructor(state){
		super(state);
		this.state={
		  "title": "Hi!",
			
		}
	}

	componentWillMount(){

	}

	change(event){
		this.setState({title:event.target.value})
	}
	generateNew(){
		const data={
		  "title":this.state.title,
		  "categories": "Computer, Friends",
		  "content": "Blog post content"
		}

		axios.post('http://reduxblog.herokuapp.com/api/posts?key=hominahominahominahomina',data).then((result)=>{
			console.log(result);
		})
	}

	render(){
		return(
			<div className="row">
				<div className="col-md-4">
					
					<input className="form-control" type="text" value={this.state.title} onChange={(event)=>this.change(event)}/>
					
					<button className="btn btn-primary" onClick={()=>this.generateNew()}> click here to make new</button>
				</div>
			</div>
		)
	}
}

export default New;