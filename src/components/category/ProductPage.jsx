import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryLists } from "../../assets/assets";
import { Rating } from "@mui/material";
import "../../style/productPage.css";
import { LocationOnOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/BasketSlice";

const ProductPage = () => {
	const { productCategory, productName } = useParams();
	const product = categoryLists[productCategory]?.filter(
		(item) => item.title === productName
	)[0];
	const discount = Math.ceil(Math.random() * 50 + 20);
	const currentDate = new Date();

	const options = { day: "numeric", month: "long" };
	const formattedDate = currentDate.toLocaleDateString("en-US", options);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addNewItem = (product) => {
		dispatch(
			addToBasket({
				id: product.title,
				title: product.title,
				image: product.link,
				price: parseInt(product.price.match(/\d+/g).reduce((acc, digit)=>acc+digit)),
				rating: parseInt(product.rating.split(" ")[0]),
			})
		);
	}

	return (
		product && (
			<div className="product-page">
				<div className="product-img">
					<img src={product?.link} alt={product?.title} />
				</div>
				<div className="product-details">
					<a href="#">Visit the Store</a>
					<h1>{product?.title}</h1>
					<div className="rating">
						<span>{product.rating.split(" ")[0]}</span>
						<Rating
							sx={{ mx: 1 }}
							size="small"
							value={parseFloat(product.rating.split(" ")[0], 10)}
							precision={0.2}
						/>
						<span style={{ color: "#007185" }} className="reviews">
							{product.reviews} ratings
						</span>
					</div>
					<p>50+ bought this past month</p>
					<div className="price">
						<button>Deal of the Day</button>
						<h2>
							<span
								style={{ color: "#cc0c39", fontWeight: "400" }}
								className="discount"
							>
								-{discount}%{" "}
							</span>
							<span style={{ fontSize: "12px", verticalAlign: "top" }}>₹</span>
							{product.price}
						</h2>
						<p className="actual-price">
							M.R.P.:{" "}
							<span>
								₹
								{Math.floor(
									parseInt(product.price.replace(",", "")) *
										(1 + discount / 100)
								)}
							</span>
						</p>
						<p className="inclusive">Inclusive of all taxes</p>
					</div>
					<div className="offers">
						<div className="offer-img">
							<img
								src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
								alt="offters"
							/>
							<h3>Offers</h3>
						</div>
						<div className="offer-cards">
							<div className="offer-card">
								<h4>Bank offer</h4>
								<p>Upto ₹850.00 discount on select…</p>
								<a href="#">5 offers {">"}</a>
							</div>
							<div className="offer-card">
								<h4>Partner Offers</h4>
								<p>Get GST invoice and save up to 28% on…</p>
								<a href="#">1 offer {">"}</a>
							</div>
						</div>
					</div>
					<div className="delivery">
						<div>
							<img
								src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
								alt="delivery"
							/>
							<a href="#">10 days Returnable</a>
						</div>
						<div>
							<img
								src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
								alt="delivery"
							/>
							<a href="#">Amazon Delivered</a>
						</div>
						<div>
							<img
								src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
								alt="delivery"
							/>
							<a href="#">Free Delivery</a>
						</div>
						<div>
							<img
								src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
								alt=""
							/>
							<a href="#">Top Brand</a>
						</div>
					</div>
				</div>
				<div className="basket">
					<h2>
						<span style={{ fontSize: "12px", verticalAlign: "top" }}>₹</span>
						{product.price.replace(/\./g, "")}
					</h2>
					<p>
						<span>
							<a href="#">Free delivery</a>
						</span>{" "}
						{formattedDate}. Order within{" "}
						<span style={{ color: "#007600" }}>14 hrs 8 mins.</span>
					</p>
					<p>
						Or fastest delivery <span>Tomorrow, {formattedDate}</span>. Order
						within <span style={{ color: "#007600" }}>3 hrs</span>. Details
					</p>
					<div className="location">
						<LocationOnOutlined />
						{/* <svg fill="#000000" viewBox="0 0 395.71 395.71">
						<g>
							<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
						</g>
					</svg> */}
						<a>Delivering to Roorkee 247667 - Upate location</a>
					</div>
					<div className="quantity">
						<label htmlFor="quantity">Quantity: </label>
						<select id="quantity" type="number" defaultValue={1}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>
					<div className="buttons">
						<button className="basket-btn" onClick={() => addNewItem(product)}>
							Add to Cart
						</button>
						<button className="buy-btn" onClick={() => navigate("/checkout")}>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default ProductPage;
