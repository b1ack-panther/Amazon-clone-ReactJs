import React from "react";
import "../style/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
	const basket = useSelector((state) => state.basket);
	const user = useSelector((state) => state.userCredentials.user);

	const handleAuthentication = () => {
		console.log(user);
		if (user) {
			signOut(auth);
			// console.log("User Signed Out Successfully!", user);
		}
	};

	const getMail = () => {
		let mail = user;
		let ind = mail.indexOf('@');
		return mail.substring(0, ind);
	}

	return (
		<>
			<div className="header">
				<Link to="/">
					<img
						className="header_logo"
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt=""
					/>
				</Link>

				<div className="header_search">
					<input className="header_searchInput" placeholder="Search Amazon.in" type="text" />
					<div className="header_searchIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							fill="currentColor"
						>
							{" "}
							<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>{" "}
						</svg>
					</div>
				</div>
				<div className="header_nav">
					<Link to={!user && "/login"}>
						<div onClick={handleAuthentication} className="header_option">
							<span className="header_optionLineOne">
								Hello {user ? getMail() : "guest"}
							</span>
							<span className="header_optionLineTwo">
								{user ? "Sign Out" : "Sign In"}
							</span>
						</div>
					</Link>
					<div className="header_option">
						<span className="header_optionLineOne">Returns</span>
						<span className="header_optionLineTwo">& Orders</span>
					</div>
					<div className="header_option">
						<span className="header_optionLineOne">Your</span>
						<span className="header_optionLineTwo">Prime</span>
					</div>
				</div>
				<Link to="checkout">
					<div className="header_optionBasket">
						<ShoppingBasketIcon />
						<span className="header_optionLineTwo header_basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
			<Outlet />
		</>
	);
}

export default Header;
