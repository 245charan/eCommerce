import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
	return (
		<div className='p-5 shadow-lg border rounded-md'>
			<div className='flex items-center'>
				<div className='lg:h-[9rem] w-[5rem] h-[5rem] lg:w-[9rem]'>
					<img
						src='https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70'
						alt=''
						className='w-full h-full object-cover object-top'
					/>
				</div>
				<div className=' space-y-1 ml-5'>
					<p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
					<p className='opacity-70'>Size: L, White</p>
					<p className='opacity-70 mt-2'>Seller: Cristy Fashion</p>
					<div className='flex space-x-5 items-center text-gray-900 pt-10'>
						<p className='font-semibold'>$199</p>
						<p className='opacity-60 line-through'>$211</p>
						<p className='font-semibold text-green-500'>5% Off</p>
					</div>
				</div>
			</div>
			<div className='lg:flex items-center lg:sxpace-x-10 pt-4'>
				<div className='flex items-center space-x-2'>
					<IconButton>
						<RemoveCircleOutlineIcon />
					</IconButton>
					<span className='py-1 px-7 border rounded-sm'>2</span>
					<IconButton sx={{color:'rgb(145,85,253)'}}>
						<AddCircleOutlineIcon />
					</IconButton>
				</div>

				<div>
					<Button sx={{color:'rgb(145,85,253)'}}> Remove </Button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
