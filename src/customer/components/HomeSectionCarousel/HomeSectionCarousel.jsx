import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@headlessui/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HomeSectionCarousel = () => {
	const responsive = {
		0: { items: 1 },
		720: { items: 3 },
		1024: { items: 5.5 },
	};
	const items = [1, 2, 3, 4, 5, 6].map((item) => <HomeSectionCard />);
	return (
		<div className="relative px-4 lg:px-8">
			<div className="relative p-5">
				<AliceCarousel
					items={items}
					disableButtonsControls
					// autoPlay
					// autoPlayInterval={1000}
					responsive={responsive}
					infinite
				/>
				<Button
					variant="contained"
					className="z-50"
					sx={{
						position: "absolute",
						top: "8rem",
						right: "0rem",
						transfrom: "translateX(50%) rotate(90deg)",
					}}
					aria-label="next"
				>
					<ArrowBackIosNewIcon sx={{ transfrom: "rotate(-90deg)" }} />
				</Button>
			</div>
		</div>
	);
};

export default HomeSectionCarousel;
