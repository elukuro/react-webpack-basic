import './style/app.scss'
import ReactDOM from 'react-dom';
import React from 'react';
import App from './component/app';
import Test from './container/test';

import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';


ReactDOM.render(
	<div>
		<BrowserRouter>
					<Switch>
						<Route path="/test" component={Test}/>	
						<Route path="/" component={App}/>	
					</Switch>

		</BrowserRouter>
	</div>
	,document.getElementById('root')
)

