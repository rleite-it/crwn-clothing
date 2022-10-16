import React, { useState } from "react";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./styles.scss";

function SignIn() {
	const [credentials, setCredentials] = useState({ email: "", password: "" });

	const handleSubmit = (event) => {
		event.preventDefault();

		setCredentials({ email: "", password: "" });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={credentials.email}
					handleChange={handleChange}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={credentials.password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
