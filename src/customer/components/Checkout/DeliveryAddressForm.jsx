import { Grid, Button, Box, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const address = {
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			address: data.get("address"),
			city: data.get("city"),
			state: data.get("state"),
			zip: data.get("zip"),
			phone: data.get("phone"),
		};
		console.log("address", address);
	};
	return (
		<div>
			<Grid container spacing={4}>
				<Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
					<div className='p-5 py-7 border-b cursor-pointer'>
						<AddressCard />
						<Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>
							Deliver here
						</Button>
					</div>
				</Grid>
				<Grid item xs={12} lg={7}>
					<Box className=' border rounded-md shadow-md p-5'>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id='firstName'
										name='firstName'
										label='First Name'
										fullWidth
										autoComplete='given-name'
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id='lasttName'
										name='lastName'
										label='Last Name'
										fullWidth
										autoComplete='given-name'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										id='address'
										name='address'
										label='Address'
										fullWidth
										autoComplete='given-address'
										multiline
										rows={4}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id='city'
										name='city'
										label='City'
										fullWidth
										autoComplete='given-name'
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id='state'
										name='state'
										label='State/Province/Region'
										fullWidth
										autoComplete='given-name'
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id='zip'
										name='zip'
										label='Zip Code'
										fullWidth
										autoComplete='given-name'
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField required id='phone' name='phone' label='Phone Number' fullWidth />
								</Grid>
								<Grid item xs={12} sm={6}>
									<Button
										variant='contained'
										size='large'
										sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
										type='submit'>
										Deliver here
									</Button>
								</Grid>
							</Grid>
						</form>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default DeliveryAddressForm;
