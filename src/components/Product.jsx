import React from "react";
import "../style/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../store/BasketSlice";

function Product({ id, title, image, price, rating }) {
	const dispatch = useDispatch();
	const basket = useSelector((state) => {
		return state.basket;
	});

	const addNewItem = () => {
		dispatch(
			addToBasket({
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			})
		);
	};

	return (
		<div className="product" key={id}>
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addNewItem}>Add to Basket</button>
		</div>
	);
}

export default Product;
