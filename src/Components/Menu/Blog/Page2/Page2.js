import React from 'react';
import { Typography, Container } from '@mui/material';
import './style.scss';
import ResentPost from './ResentPost/Resent_post';

function Page2() {
	return (
		<div>
			<Container sx={{ mb: 3, padding: '18px', backgroundColor: '#fff' }}>
				<div style={{ width: '100%' }}>
					<Typography variant="h6" sx={{ fontSize: '14px', fontWeight: '800' }}>
						Category
						<hr />
					</Typography>
					<Typography
						className="category"
						variant="body2"
						sx={{ color: '#545454', fontSize: '11px' }}
					>
						<span className="span">
							Restaurant food <hr />
						</span>
						<span className="span">
							Travel news <hr />
						</span>
						<span className="span">
							Modern technology <hr />
						</span>
						<span className="span">
							Product <hr />
						</span>
						<span className="span">
							Inspiration
							<hr />
						</span>
						<span className="span">Health Care</span>
					</Typography>
				</div>
			</Container>
			<ResentPost />
		</div>
	);
}

export default Page2;
