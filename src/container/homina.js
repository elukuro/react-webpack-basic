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

	addItem(e){
		e.preventDefault();
		const {buyItems}=this.state;
		const newItem=this.newItem.value;

		this.setState({
			buyItems:[...this.state.buyItems, newItem]
		})
		this.addForm.reset();

	}

	render(){
		return(
			<div>
				<div className="row">
					<form ref={(input)=>this.addForm=input} className="form-inline" onSubmit={(event)=>{this.addItem(event)}}>
						<div className="form-group">
							<input ref={(input)=>this.newItem=input} type="text" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-primary">add</button>
					</form>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Greeting name="test" age="18" /><br/>
						 <table className="table">
						    <thead>
						      <tr>
						        <th>item</th>
						        <th>action</th>
						      </tr>
						    </thead>
						    <tbody>
						   		 	{
										this.state.buyItems.map(item=>{
											return(
												<tr key={item}>
													<td>{item}</td>
													<td width="20px"><button className="btn btn-default">delete</button></td>
												</tr>
											)
										})
									} 
						    </tbody>
						  </table>
				  	</div>
				</div>
			</div>
		)
	}
}

export default Homina;