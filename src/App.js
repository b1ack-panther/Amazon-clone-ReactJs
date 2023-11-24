import { useEffect } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login.jsx"

import {
	BrowserRouter,
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import { setUser } from "./store/CredentialSlice.jsx";
import Payment from "./components/Payment.jsx";


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
		console.log(user);
			if (user) {
				dispatch(setUser({user:user}))
			}
			else {
				dispatch(setUser({user:null}))
			}
		})
	}, [])

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Header />}>
						<Route path="checkout/" element={<Checkout />} />
						<Route path="" element={<Home />} />
					</Route>
					<Route path='/payment' element={<Payment/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
