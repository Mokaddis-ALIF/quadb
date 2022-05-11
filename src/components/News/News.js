import React from 'react';
import { data } from './Data';
import './News.css';

const News = () => {
	return (
		<div style={{}}>
			{data.map((d) => (
				<div
					style={{
						display: 'flex',
						padding: '0.5rem',
						borderBottom: '1px solid #B2BEB5',
						gap: '1rem',
					}}
					id={d.id}
				>
					<img src={d.src} alt="" />
					<div>
						<div style={{ fontSize: '16px', fontWeight: 'bold' }}>
							{d.title}
						</div>
						<p>{d.subtitle}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default News;
