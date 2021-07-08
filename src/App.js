import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import './App.css';

function App() {

  return (

	<Router>
		<div className="App">
			<nav>
				<h1>Kanbandingo</h1>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/auth">Auth</Link>
					</li>
				</ul>
			</nav>
			<div className="mainContent">
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/auth" component={Auth}></Route>
				</Switch>
			</div>
		</div>
	</Router>
   
  );
}

export default App;
