// import React, { useRef, useState } from "react";
import { sliderImg } from "../assets/assets";
import Slider from "react-slick";

function ImageSlider() {
	// const [activeIndex, setActiveIndex] = useState(0);
	// const timeRef = useRef(null);

	// const dotClick = (index) => {
	// 	setActiveIndex(index);
	// };

	// useEffect(() => {
	//   if (timeRef.current) {
	//     clearTimeout(timeRef.current)
	//   }

	//   timeRef.current = setTimeout(() => {
	//     goToNext();
	//   }, 2000);
	//   return () => clearTimeout(timeRef.current);
	// }, [activeIndex])

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: "block",
					background: "red",
					height: "40px",
					width: "40px",
					zIndex: 1000,
				}}
				onClick={onClick}
			>
				<h2>next page</h2>
			</div>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "green" }}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		sliderToScroll: 1,
		autoplay: true,
		// centerPadding: "10px",
		// centerMode: true,
		autoplaySpeed: 4000,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		pauseOnHover: false,
	};

	return (
		<div className="slider">
			<Slider {...settings}>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[0]}
						alt="sliderImage"
					/>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[1]}
						alt="sliderImage"
					/>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[2]}
						alt="sliderImage"
					/>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[3]}
						alt="sliderImage"
					/>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[4]}
						alt="sliderImage"
					/>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[5]}
						alt="sliderImage"
					/>
				</div>
				<div>
					<img
						style={{ width: "100%", height: "100%" }}
						src={sliderImg[6]}
						alt="sliderImage"
					/>
				</div>
			</Slider>
			{/* <div
				className="slider-flex"
				
			//
			<div style={{
					transform: `translateX(${-activeIndex * 100}vw)`,
				}}
			 style={{height: "200px", width: "100%" , backgroundColor: "redlightsalmon}>
			// 	{sliderImg.map((img, index) => (>Box</div> 		<img key={index} src={img} alt="sliderImg" />
			// 	))}
			// </div>
			// <div className="slider-dots">
			// 	{sliderImg.map((_, index) => (
					<div
						key={index}
						style={{ color: `${index === activeIndex ? "#2008" : ""}` }}
						onClick={() => dotClick(index)}
					>
						●
					</div>
				))}
			</div> */}
		</div>
	);
}

export default ImageSlider;
