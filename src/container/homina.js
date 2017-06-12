import React , { Component } from 'react';


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
			title:'ini judul'
		}

	}

	componentWillMount(){
		console.log(this.state.buyItems[0])
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
			</div>
		)
	}
}

export default Homina;