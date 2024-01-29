import React from "react";
import "../style/GridCard.css";
import { useNavigate } from "react-router-dom";

const GridCard = ({ category, subcategory }) => {
  const navigate = useNavigate();
  
	const handleClick = (item) => {
		const word = encodeURIComponent(item.title);
		navigate(`/home/${word}`);
	};
	return (
		<div className="grid-card">
			<h2>{category}</h2>
			<div className="grid-card-body">
				{subcategory.map((item, index) => {
					const word = encodeURIComponent(item.title);
					return (
						<div
							onClick={() => handleClick(item)}
							key={index}
							className="subcategory"
						>
							<img src={item.link} alt="grid-img" />
							<p>{item.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GridCard;
