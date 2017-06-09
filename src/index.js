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
import New from './container/new';

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/test" component={postIndex}/>	
					<Route path="/new" component={New}/>	
					
					<Route path="/" component={App}/>	
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	,document.getElementById('root')
)

