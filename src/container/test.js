import React, {Component} from 'react';

class Test extends Component{
	render(){
		return(
			<div>
				<div>
					<h4>this is for test page</h4>
				</div>
				<div>
					<img src={require('/images/test-image.png')}/>
				</div>
			</div>
		)
	}
}

export default Test;