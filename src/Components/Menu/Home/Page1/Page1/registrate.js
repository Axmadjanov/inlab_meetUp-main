import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import './style.scss';

function Registrate() {
	const [show, setShow] = React.useState(false);

	// const [name, setName] = React.useState("");
	// const [number, setNumber] = React.useState("");
	// const [email, setEmail] = React.useState("");

	// const handleSend = (e) => {
	//   e.preventDefault();

	//   if (name.length >= 5) {
	//     console.log("hi");
	//   }
	//   // if (name === "") {
	//   //   console.log("hi");
	//   // }
	// };

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				position: 'fixed',
				top: '0',
				right: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: '#343434d1',
			}}
		>
			<Container
				style={{
					width: '90%',
					backgroundColor: '#fff',
					borderRadius: '10px',
					padding: '20px',
					boxShadow: '0 2px 3px 2px blue',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<form
				// noValidate autoComplete="off" onSubmit={handleSend}
				>
					<TextField
						// onClick={(e) => setName(e.target.value)}
						variant="outlined"
						type="text"
						label="Your name"
						size="small"
						fullWidth
						// value={name}
					/>{' '}
					<br />
					<br />
					<TextField
						// onClick={(e) => setNumber(e.target.value)}
						variant="outlined"
						type="number"
						label="Your Number"
						fullWidth
						size="small"
						// value={number}
					/>{' '}
					<br />
					<br />
					<TextField
						// onClick={(e) => setEmail(e.target.value)}
						variant="outlined"
						type="email"
						label="Your Email"
						size="small"
						fullWidth
						// value={email}
					/>{' '}
					<br />
					<br />
					{show ? null : null}
					<Button
						style={{ width: '20%' }}
						variant="contained"
						type="submit"
						size="small"
					>
						Submit
					</Button>
				</form>
			</Container>
		</div>
	);
}
export default Registrate;
