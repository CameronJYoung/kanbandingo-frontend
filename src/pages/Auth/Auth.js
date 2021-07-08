import React from 'react';
import './Auth.css';

import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

function Auth() {
	return (
		<div className="Auth">
			<Register></Register>
			<Login></Login>
		</div>
	);
  }

export default Auth;