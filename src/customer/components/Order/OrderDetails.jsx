import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker.jsx";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";

const OrderDetails = () => {
	return (
		<div className='px-5 lg:px-20'>
			<div className='p-5 border shadow-lg'>
				<h1 className='font-bold text-lg py-8'>Delivery Address</h1>
				<AddressCard />
			</div>
			<div className='py-20'>
				<OrderTracker activeStep={1} />
			</div>
			<Grid className='space-y-5' container>
				{[1,1,1,1,1,1,1,1].map((item) => <Grid
					item
					container
					className='shadow-xl rounded-md p-5 border'
					sx={{ alignItems: "center", justifyContent: "space-between" }}>
					<Grid item xs={6}>
						<div className='flex items-center space-x-4'>
							<img
								className='w-[5rem] h-[5rem] object-cover object-top'
								src='https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
								alt=""
							/>

							<div className='space-y-2 ml-5'>
								<p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
								<p className='space-x-5 opacity-50 text-xs font-semibold'>
									<span>Color: pink</span>
									<span>Size: M</span>
								</p>
								<p>Seller: IndoQuality</p>
								<p>$199</p>
							</div>
						</div>
					</Grid>
					<Grid item>
						<Box sx={{ color: deepPurple[500] }}>
							<StarBorderPurple500SharpIcon sx={{ fontSize: "2rem" }} fontSize='2px' className='px-2' />
							<span>Rate & Review Product</span>
						</Box>
					</Grid>
				</Grid>)}
			</Grid>
		</div>
	);
};

export default OrderDetails;
