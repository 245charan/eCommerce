import React, { useState, useEffect } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@headlessui/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HomeSectionCarousel = ({data, sectionName}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const responsive = {
		0: { items: 1 },
		720: { items: 3 },
		1024: { items: 5 },
	};
	const slidePrev = () => setActiveIndex(activeIndex - 1);
	const slideNext = () => setActiveIndex(activeIndex + 1);

	const syncActiveIndex = (item) => {console.log("Here:", {item}); setActiveIndex(item)};

	// useEffect(() => {
	// 	syncActiveIndex(activeIndex);
	// }, [activeIndex]);

	const items = data
		.slice(0, 10)
		.map((item) => <HomeSectionCard product={item} />);
	return (
		<div className="">
			<h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
			<div className="relative  p-5 ">
				<AliceCarousel
					activeIndex={activeIndex}
					onSlideChanged={syncActiveIndex}
					disableButtonsControls
					disableDotsControls
					items={items}
					responsive={responsive}
				/>
				{activeIndex !== 0 && (
					<Button
						variant="contained"
						className="z-90"
						style={{
							position: "absolute",
							top: "8rem",
							left: "0rem",
							transform: "translateX(-50%) rotate(90deg)",
						}}
						aria-label="previous"
						onClick={slidePrev}
					>
						<ArrowBackIosNewIcon
							sx={{ transform: "rotate(-90deg)", color: "black" }}
						/>
					</Button>
				)}
				{activeIndex !== items.length - 5 && (
					<Button
						variant="contained"
						className="z-90"
						onClick={slideNext}
						style={{
							position: "absolute",
							top: "8rem",
							right: "0rem",
							transform: "translateX(50%) rotate(90deg)",
						}}
						aria-label="next"
					>
						<ArrowBackIosNewIcon
							sx={{ transform: "rotate(90deg)", color: "black" }}
						/>
					</Button>
				)}
			</div>
		</div>
	);
};

export default HomeSectionCarousel;
