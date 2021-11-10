import React from 'react';
import Card from '../Cards';
import Grid from "@mui/material/Grid";

function Page1() {
	return (
		<div>
		<Grid container columnSpacing={3} >
		<Grid item xs={12} sm={6} md={4} >
			<Card />
		</Grid>
		<Grid item xs={12} sm={6} md={4} >
			<Card />
		</Grid>
		<Grid item xs={12} sm={6} md={4} >
			<Card />
		</Grid>
		<Grid item xs={10} sm={0} md={2} >
		</Grid>
		<Grid item xs={12} sm={6} md={4} >
			<Card />
		</Grid>
		<Grid item xs={12} sm={6} md={4} >
			<Card />
		</Grid>
		<Grid item xs={0} sm={0} md={2} >
		</Grid>
		</Grid>
		</div>
	);
}

export default Page1;
