import { useEffect } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import ProductCategory from "./components/category/ProductCategory.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import { setUser } from "./store/CredentialSlice.jsx";
import Payment from "./components/Payment.jsx";
import ProductPage from "./components/category/ProductPage.jsx";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser({ user: user.email }));
			} else {
				dispatch(setUser({ user: null }));
			}
		});
	}, []);
	return (
		<BrowserRouter className="app">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Header />}>
					<Route path="" element={<Home />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="home/:productCategory" element={<ProductCategory />} />
					<Route
						path="home/:productCategory/:productName"
						element={<ProductPage />}
					/>
				</Route>
				<Route path="/payment" element={<Payment />} />

				{/* <Route path="/login" element={<Login />} />
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route path="/checkout" element={<Checkout />} />

					<Route path="/payment" element={<Payment />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
