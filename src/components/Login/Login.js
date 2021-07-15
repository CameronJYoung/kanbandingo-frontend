import React from 'react';

import { useHistory } from "react-router-dom";

import AuthApi from '../../api/Auth'
import useFormField from '../../hooks/useFormField'
import './Login.css';

import Kanban from '../../api/Kanban'

function Login() {
	const usernameField = useFormField();
	const passwordField = useFormField();

	const handleSubmit = (e) => {
		e.preventDefault();

		const userDetails = {
			"username": usernameField.value,
			"password": passwordField.value
		}
		
		//AuthApi.login(userDetails);
		fetch(`${process.env.REACT_APP_API_BASEURL}auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: userDetails
		}).then(response => console.log(response));
	}

	const checkLogin = (e) => {
		e.preventDefault();

		Kanban.getUserBoards();
	}

	return (
		<form className="Login">
			<label htmlFor="username">Username:</label>
			<input type="name" id="username" {...usernameField}></input>

			<label htmlFor="password">Password:</label>
			<input type="password" id="password" {...passwordField}></input>

			<button onClick={handleSubmit}>Log In</button>
			<button onClick={checkLogin}>Check Login</button>
		</form>
	);
  }

export default Login;
