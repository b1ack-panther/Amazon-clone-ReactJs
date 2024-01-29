import React from "react";
import { Link, useParams } from "react-router-dom";
import { categoryLists } from "../../assets/assets";
import "../../style/productCategory.css";
import Rating from "@mui/material/Rating";

const ProductCategory = () => {
  const { productCategory } = useParams();
  const currentDate = new Date();

	const options = { day: "numeric", month: "long" };
	const formattedDate = currentDate.toLocaleDateString("en-US", options);

	return (
		<div className="category-result">
			<h2>Results</h2>
			<p>Price and other details may vary based on product size and colour.</p>
			<div className="product-cards">
				{categoryLists[productCategory]?.map(
					({ link, title, rating, price, reviews, brand }) => {
						let randNum = Math.ceil(Math.random() * 50) + 20;
            let intPrice = parseInt(price?.replace(",", ""));
						const productPageLink = encodeURIComponent(title.replace("100%", "100\%25"));
						const productCategoryLink = encodeURIComponent(productCategory.replace("100%", "100\%25"))
						return (
							<Link to={`/home/${productCategoryLink}/${productPageLink}`} key={title} className="product-card">
								<div>
									<img src={link} alt="product-img" />
								</div>
								{brand && (<h3 className="brand">{brand}</h3>)}
								<h3>{title?.replace("Amazon Brand -", "")}</h3>
								{(rating && <p>
									<Rating
										sx={{ ml: -0.3 }}
										name="read-only"
										readOnly
										size="medium"
										precision={0.1}
										value={parseFloat(rating?.split(" ")[0])}
									/>{" "}
									<br />
									<span className="rating-text">
										{rating} <span className="review"> ({reviews})</span>
									</span>{" "}
								</p>)}
								<button>Limited time deal</button>
								<h3 className="price">
									<span className="rupee-sign">₹</span>
									{price}
									<span className="original-price">
										&nbsp;M.R.P.
										<span style={{ textDecorationLine: "line-through" }}>
											&nbsp;₹{intPrice + Math.round((intPrice * randNum) / 100)}{" "}
										</span>
										&nbsp;({randNum}% off)
									</span>
								</h3>
								<div className="delivery">
									<img src="/prime.png" alt="prime-img" />
									<p>
										Get it by{" "}
										<span style={{ fontWeight: "bold" }}>
											Tomorrow {formattedDate}
										</span>
									</p>
								</div>
							</Link>
						);
					}
				)}
			</div>
		</div>
	);
};

export default ProductCategory;
