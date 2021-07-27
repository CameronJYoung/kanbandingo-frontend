import React, { useEffect, useState } from 'react';

import './AuthError.css'

import AuthApi from '../../api/Auth'


function AuthError() {
	return (
		<div className="AuthError">
			ERROR: YOU NEED TO LOGIN
		</div>
	);
}

export default AuthError;