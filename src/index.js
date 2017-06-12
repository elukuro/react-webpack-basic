import './style/app.scss'
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import Promise from 'redux-promise';
import reducers from './reducers/';

const createStoreWithMiddleware=applyMiddleware(Promise)(createStore);
import App from './component/app';
import postIndex from './component/post_index';
import postShow from './component/post_show';
import New from './container/new';
import Homina from './container/homina';
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/list/:id" component={postShow}/>
					<Route path="/list" component={postIndex}/>	
					<Route path="/new" component={New}/>	
					<Route path="/homina" component={Homina}/>	
					<Route path="/" component={App}/>	
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	,document.getElementById('root')
)

