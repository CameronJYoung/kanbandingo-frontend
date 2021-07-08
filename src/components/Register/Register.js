import React from 'react';
import './Register.css';

import AuthApi from '../../api/Auth'
import useFormField from '../../hooks/useFormField'

function Register() {
	const usernameField = useFormField();
	const emailField = useFormField();
	const passwordField = useFormField();
	const confirmPasswordField = useFormField();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (passwordField.value === confirmPasswordField.value) {

			const userDetails = {
				"username": usernameField.value,
				"email": emailField.value,
				"password": passwordField.value
			}
			
			AuthApi.register(userDetails);

		} else {
			console.log('passwords do not match');
		}
	}

	return (
		<form className="Register">
			<label htmlFor="username">Username:</label>
			<input type="name" id="username" {...usernameField}></input>

			<label htmlFor="email">Email:</label>
			<input type="email" id="email" {...emailField}></input>

			<label htmlFor="password">Password:</label>
			<input type="password" id="password" {...passwordField}></input>

			<label htmlFor="confirmPassword">Confirm password:</label>
			<input type="password" id="confirmPassword"{...confirmPasswordField}></input>

			<button onClick={handleSubmit}>Register</button>
		</form>
	);
  }

export default Register;