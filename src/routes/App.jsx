import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

const App = () => (
	<Router>
		<Switch>
			<Route path='/' component={Home} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default App;
