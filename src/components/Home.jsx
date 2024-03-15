import React, { useEffect, useState } from "react";
import "../style/Home.css";
import Product from "./Product";
import ImageSlider from "./ImageSlider.jsx";
import {
	categoryLists,
	dealsOfTheDay,
	mainPageGrids,
} from "../assets/assets.js";
import GridCard from "./GridCard.jsx";
import { Outlet } from "react-router-dom";
import HorizontalScroller from "./category/HorizontalScroller.jsx";

function Home() {
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setActiveSlider((activeSlider + 1) / sliderImg.length);
	// 	}, 5000);
	// 	return () => clearInterval(interval);
	// }, [sliderImg.length]);
	return (
		<>
			<div className="home">
				<div className="h-header">
					<ul>
						<li>
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									fill="currentColor"
									viewBox="0 0 50 50"
								>
									<path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
								</svg>
								<span>All</span>
							</a>
						</li>
						<li>
							<a href="#">Amazon miniTV</a>
						</li>
						<li>
							<a href="#">Sell</a>
						</li>
						<li>
							<a href="#">Best Sellers</a>
						</li>
						<li>
							<a href="#">Today's Deals</a>
						</li>
						<li>
							<a href="#">Mobiles</a>
						</li>
						<li>
							<a href="#">Electronics</a>
						</li>
						<li>
							<a href="#">Prime Customer</a>
						</li>
						<li>
							<a href="#">Service</a>
						</li>
						<li>
							<a href="#">Gift</a>
						</li>
						<li>
							<a href="#">Ideas</a>
						</li>
						<li>
							<a href="#">New Releases</a>
						</li>
						<li>
							<a href="#">Home & Kitchen</a>
						</li>
						{/* <li>
						<a href="#">Fashion</a>
					</li>
					<li>
						<a href="#">Amazon Pay</a>
					</li>
					<li>
						<a href="#">Computers</a>
					</li>
					<li>
						<a href="#">Books</a>
					</li> */}
						<li>
							<a href="#">Car & Motorbike</a>
						</li>
					</ul>
				</div>
				<ImageSlider />
				{/* <div className="home-container">
				<div className="home-row">
					<Product
						id="12321341"
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
						image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SY445_SX342_.jpg"
						price={29.99}
						rating={5}
					/>
					<Product
						id="49538094"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/310emBhITrL._SY300_SX300_QL70_FMwebp_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
						price={199.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/51ejNjAQ9nL._SY300_SX300_QL70_FMwebp_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/41tEQogY3qL._SY445_SX342_QL70_FMwebp_.jpg"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/41XOG2QviwL._SY445_SX342_QL70_FMwebp_.jpg"
					/>
				</div>

				<div className="home-row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitory - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://m.media-amazon.com/images/I/81aVCRqDqGL._SX679_.jpg"
					/>
				</div>
				</div> */}
				<div>
					<div className="grid-cards">
						{mainPageGrids.map((items, index) => (
							<GridCard key={index} {...items} />
						))}
					</div>
				</div>
				<div className="deals-of-the-day">
					<h2>Todays Deals</h2>
					<HorizontalScroller list={dealsOfTheDay} />
				</div>
				<div className="deals-of-the-day">
					<h2>Related to items you've viewed</h2>
					<HorizontalScroller
						category="Upto 75% off | boAt"
						list={categoryLists["Upto 75% off | boAt"]}
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
