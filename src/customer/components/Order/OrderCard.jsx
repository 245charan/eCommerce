import React from "react";
import { Grid, Icon } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`/account/order/${5}`)} className='p-5 border shadow-md hover:shadow-2xl'>
			<Grid container spacing={2} sx={{ justifyContent: "space-between", padding: "5px" }}>
				<Grid item xs={6}>
					<div className='flex cusrsor-pointer'>
						<img
							src='https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
							alt=''
							className='object-cover object-top w-[5rem] h-[5rem]'
						/>
						<div className='ml-5'>
							<p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
							<p className='opacity-50 text-xs font-semibold'>Size: M</p>
							<p className='opacity-50 text-xs font-semibold'>Size: M</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={2}>
					<p className='opacity-70'> $199</p>
				</Grid>
				<Grid item xs={4}>
					<div className='flex gap-1'>
						{true && (
							<div>
								<p className='font-bold'>
									<AdjustIcon
										sx={{ width: "15px", height: "15px" }}
										className='mr-2 text-sm text-green-600'
									/>
									<span>Delivered On Mar 03</span>
								</p>
							</div>
						)}
						{false && (
							<p className='font-bold'>
								<AdjustIcon
									sx={{ width: "15px", height: "15px" }}
									className='mr-2 text-sm text-green-600'
								/>
								<span>Expected Delivery On Mar 03</span>
							</p>
						)}
					</div>
					<p className='opacity-60'>
						<span>Your Item Has Been Deliveried</span>
					</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default OrderCard;
