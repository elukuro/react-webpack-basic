import React, { Component } from 'react';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			hello:"this is a state and try change state"
		}
	}
	render(){
		return(
			<div>
				<h2>test</h2>
				<h4>test lagi</h4>
				<h5>test lagi</h5>
				<h6>{this.state.hello} test for state</h6>
			</div>
		)
	}
}

export default App;