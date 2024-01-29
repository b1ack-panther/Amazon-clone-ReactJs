import React, { useEffect, useRef } from "react";
import "../../style/horizontalScroller.css";
import { useNavigate } from "react-router-dom";

const HorizontalScroller = ({ category, list }) => {
	const container = useRef(null);
	const leftArrow = useRef(null);
	const rightArrow = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		const scrollWidth = Math.floor(container.current.offsetWidth / 255) * 255;
		leftArrow.current.addEventListener("click", () => {
			container.current.scrollLeft += -scrollWidth;
		});
		rightArrow.current.addEventListener("click", () => {
			container.current.scrollLeft += scrollWidth;
		});
	}, [container.current]);
	const handleClick = (item) => {
		if (category)
			navigate(
				`home/${encodeURIComponent(
					category.replace("100%", "100%25")
				)}/${encodeURIComponent(item.title.replace("100%", "100%25"))}`
			);
		else
			navigate(
				`/home/${encodeURIComponent(item.title).replace("100%", "100%25")}`
			);
	};
	return (
		<div className="horizontal-scroller" ref={container}>
			<div className="left-arrow" ref={leftArrow}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
				</svg>
			</div>
			{list.map((item, index) => (
				<div onClick={() => handleClick(item)} key={index} className="hcCard">
					<div>
						<img src={item.link} alt="product-img" />
					</div>
					{!category ? (
						""
					) : (
						<p className="dotdText">
							<span>Up to {Math.round(Math.random() * 50) + 20}% off</span>
							Deals of the day
						</p>
					)}
					<p className="title">{item.title.replace("Amazon Brand -", "")}</p>
				</div>
			))}
			<div className="right-arrow" ref={rightArrow}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path>
				</svg>
			</div>
		</div>
	);
};

export default HorizontalScroller;
