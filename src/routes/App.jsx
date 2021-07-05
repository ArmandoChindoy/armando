import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import NotFound from '../containers/NotFound.jsx';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
