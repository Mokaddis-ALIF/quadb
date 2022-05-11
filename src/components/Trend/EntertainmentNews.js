import React from 'react';
import { tdata } from './TrendData';

const EntertainmentNews = () => {
	return (
		<div>
			<div
				style={{
					fontSize: '18px',
					fontWeight: 'bold',
					paddingBottom: '0.5rem',
					borderBottom: '2px solid black',
				}}
			>
				Entertainment News
			</div>
			{tdata.map((d) => (
				<div
					id={d.id}
					style={{
						display: 'flex',
						textAlign: 'start',
						alignItems: 'flex-start',
						gap: '1rem',
						padding: '1rem',
						borderBottom: '1px solid #B2BEB5',
					}}
				>
					<img src={d.src} alt="" />
					<p>{d.title}</p>
				</div>
			))}
		</div>
	);
};

export default EntertainmentNews;
