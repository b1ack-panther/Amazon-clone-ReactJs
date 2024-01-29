import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
// import {auth} from '../firebase'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
	const navigate = useNavigate();
	const auth = getAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if(userCredential)navigate('/');
			})
			.catch(error => {
				console.log(error.message)
		})
	};

	const resister = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				navigate("/")				
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login_logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/330px-Amazon.com-Logo.svg.png"
					alt="logo image"
				/>
			</Link>
			<div className="login_container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit" onClick={signIn} className="login_signInButton">
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				<button onClick={resister} className="login_registerButton ">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
