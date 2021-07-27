import React from 'react';

import AuthApi from '../../api/Auth'
import useFormField from '../../hooks/useFormField'
import './Login.css';

function Login() {
	const usernameField = useFormField();
	const passwordField = useFormField();

	const handleSubmit = (e) => {
		e.preventDefault();

		const userDetails = {
			"username": usernameField.value,
			"password": passwordField.value
		}
		
		AuthApi.login(userDetails);
	}

	return (
		<form className="Login">
			<label htmlFor="username">Username:</label>
			<input className="authField" type="name" id="username" {...usernameField}></input>

			<label htmlFor="password">Password:</label>
			<input className="authField" type="password" id="password" {...passwordField}></input>

			<button onClick={handleSubmit}>Log In</button>
		</form>
	);
  }

export default Login;
