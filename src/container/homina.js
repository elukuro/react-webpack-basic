import React , { Component } from 'react';
import {GoogleMap} from '../component/google_map';

const Greeting = (props)=> {
	const {name,age}=props;

	return(
		<p>your name is {name} your age {age}</p>
	)
};

class Homina extends Component{

	constructor(props){
		super(props);
		this.state={
			buyItems:['milk','bread','something'],
			title:'ini judul',
			lat:-34.397,
			lng:150.644
		}

	}

	

	render(){
		return(
			<div>
				<h1>homina {this.state.title}</h1>
				<Greeting name="test" age="18" /><br/>
				{
					this.state.buyItems.map(item=>{
						return(
							<p key={item}>{item}</p>
						)
					})
				}
				<button onClick={()=>{this.setState({lat:40.7128,lng:-74.005})}}>something awesome</button>
				<GoogleMap lat={this.state.lat} lng={this.state.lng}/>
			</div>
		)
	}
}

export default Homina;