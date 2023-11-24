import React, { useState } from "react";
import "../style/Home.css";
import Product from "./Product";


function Home() {
	return (
		<div className="home">
			<div className="home_container">
				
				<img
					className="home_image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3B_PC_NTA_Hero_2x_V3._CB573693536_.jpg"
					alt=""
				/>
				<div className="home_row">
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
				<div className="home_row">
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

				<div className="home_row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitory - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://m.media-amazon.com/images/I/81aVCRqDqGL._SX679_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
