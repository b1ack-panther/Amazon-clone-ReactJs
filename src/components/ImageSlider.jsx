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

  const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		sliderToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
	};
  return (
    <div className="slider">
      <Slider {...settings}>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[0]} alt="sliderImage" /></div>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[1]} alt="sliderImage" /></div>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[2]} alt="sliderImage" /></div>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[3]} alt="sliderImage" /></div>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[4]} alt="sliderImage" /></div>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[5]} alt="sliderImage" /></div>
        <div><img style={{width: "100%", height: "100%"}} src={sliderImg[6]} alt="sliderImage" /></div>
      </Slider>
			{/* <div
				className="slider-flex"
				style={{
					transform: `translateX(${-activeIndex * 100}vw)`,
				}}
			>
				{sliderImg.map((img, index) => (
					<img key={index} src={img} alt="sliderImg" />
				))}
			</div>
			<div className="slider-dots">
				{sliderImg.map((_, index) => (
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
