import React from "react";
import "../style/CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../store/BasketSlice";

function CheckoutProduct({togglebtn=1, id, image, title, price, rating }) {
	const dispatch = useDispatch();
	const handleRemove = () => {
		dispatch(removeFromBasket(id));
	};

	return (
		<div className=" checkoutProduct" key={id}>
			<img className="checkoutProduct_image" src={image} />

			<div className="checkoutProduct_info">
				<p className=" checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_ price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				{(togglebtn===1) && <button className="remove-btn" onClick={handleRemove}>Remove From Basket</button>}
			</div>
		</div>
	);
}

export default CheckoutProduct;
