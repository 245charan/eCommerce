import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainCarouselData } from "./MainCarouselData.js";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
	// const navigate = useNavigate
	const items = MainCarouselData.map((item) => (
		<img
			className="cursor-pointer"
			role="presentation"
			src={item.image}
			alt=""
		/>
	));
	return (
		<AliceCarousel
			items={items}
			disableButtonsControls
			autoPlay
			autoPlayInterval={3000}
			disableDotsControls
			infinite
		/>
	);
};

export default MainCarousel;
