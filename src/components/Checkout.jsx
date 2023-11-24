import React from "react";
import "../style/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct.jsx";
import { useSelector } from "react-redux";

function Checkout() {
	const basket = useSelector((state) => state.basket);

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img className="checkout_ad" src="./ad.png" alt="" />
				<div className="checkout_title">
					<h2>Your shopping basket</h2>

					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
						
					))}
				</div>
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
