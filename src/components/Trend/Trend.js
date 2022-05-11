import React from 'react';
import EntertainmentNews from './EntertainmentNews';
import './Trend.css';

const data = [
	{ id: 1, name: 'SHARED' },
	{ id: 2, name: 'COMMENTED' },
	{ id: 3, name: 'READ' },
	{ id: 4, name: 'TRENDING' },
];

const Trend = () => {
	return (
		<div>
			<div
				style={{
					fontSize: '20px',
					fontWeight: 'bold',
					paddingBottom: '0.5rem',
				}}
			>
				Most popular
			</div>
			<div className="topNav">
				{data.map((n) => (
					<a
						className={n.name === 'SHARED' ? 'active' : ''}
						href={`#${n.name}`}
					>
						{n.name}
					</a>
				))}
			</div>
			<p style={{ paddingBottom: '0.3rem', borderBottom: '1px solid #B2BEB5' }}>
				Student from Telangana dies in car accident in US
			</p>

			<p style={{ paddingBottom: '0.3rem', borderBottom: '1px solid #B2BEB5' }}>
				Alia Bhatt trolled for having 'double standards' as a video of her
				refusing to consume sugar and endorsing sugar products goes viral
			</p>

			<p style={{ paddingBottom: '0.3rem', borderBottom: '1px solid #B2BEB5' }}>
				Sakshi Tanwar reveals she didn't attend any wedding for 8 years while
				shooting for Kahaani Ghar Ghar Kii
			</p>

			<p style={{ paddingBottom: '0.3rem', borderBottom: '1px solid #B2BEB5' }}>
				Xi Jinping reportedly suffering from 'cerebral aneurysm
			</p>

			<EntertainmentNews />
		</div>
	);
};

export default Trend;
