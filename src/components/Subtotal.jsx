import React, { useEffect } from "react";
import "../style/Subtotal.css";
import { useSelector } from "react-redux";
import { getBasketTotal } from "../store/BasketSlice";
import { useNavigate } from "react-router-dom";

function Subtotal() {
	const basket = useSelector((state) => state.basket);
	const navigate = useNavigate();

	return (
		<div className="subtotal">
			<p>
				subtotal ({basket.length} items):{" "}
				<strong>$ {getBasketTotal(basket)} </strong>
			</p>
			<small className="subtotal_gift">
				<input type="checkbox" />
				This item contains a gift
			</small>
			<button onClick={()=>navigate('/payment')}>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
