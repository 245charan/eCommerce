import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
	return (
		<div>
			<Grid container spacing={2} gap={3}>
				<Grid item xs={2}>
					<Box>
						<Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
							C
						</Avatar>
					</Box>
				</Grid>
				<Grid item xs={9}>
					<div className='space-y-2'>
						<div>
							<p className="font-semibold text-lg">Charan</p>
							<p className="opacity-70">March 3, 2025</p>
						</div>
					</div>
					<Rating value={4.5} name='half-rating' readOnly precision={0.5} />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quae fugiat tempora
						laudantium dolor eveniet sed consequuntur? Exercitationem, architecto cum, ab voluptatibus
						reiciendis, sint amet dignissimos consequuntur enim blanditiis dolores.
					</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductReviewCard;
