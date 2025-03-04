import { Box, Button } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
	return (
		<div className=''>
			<div className='lg:grid grid-cols-3 lg:px-16 relative  '>
				<div className='col-span-2 mt-5 lg:mt-5'>
					{/* <Box className='' xs={7}> */}
					{[1, 2, 3].map(() => (
						<CartItem />
					))}
					{/* </Box> */}
				</div>
				<div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-5'>
					<Box className='shadow-lg border rounded-md px-6 py-10'>
						<p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
						<hr />
						<div className='space-y-3 font-semibold mb-10'>
							<div className='flex justify-between pt-3 text-black'>
								<span>Price</span>
								<span>$211</span>
							</div>
							<div className='flex justify-between pt-3 text-black'>
								<span>Discount</span>
								<span className='text-green-600'>-$12</span>
							</div>
							<div className='flex justify-between pt-3 text-black'>
								<span>Delivery Charges</span>
								<span className='text-green-600'>Free</span>
							</div>
							<div className='flex justify-between pt-3 font-bold text-black'>
								<span className=''>Total Amount</span>
								<span className='text-green-600'>$199</span>
							</div>
						</div>
						<Button
							variant='contained'
							className='w-full mt-5'
							sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
							Checkout
						</Button>
					</Box>
				</div>
			</div>
		</div>
	);
};

export default Cart;
