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
		let mail = user.email;
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
					<input className="header_searchInput" type="text" />
					<SearchIcon className="header_searchIcon" />
				</div>
				<div className="header_nav">
					<Link to={!user && "/login"}>
						<div onClick={handleAuthentication} className="header_option">
							<span className="header_optionLineOne">Hello {user?getMail():"guest"}</span>
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
