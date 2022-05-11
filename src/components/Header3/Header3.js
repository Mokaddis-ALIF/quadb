import React from 'react';
import './Header3.css';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

const news = [
	{ id: 0, name: <AiFillHome /> },
	{ id: 1, name: 'Latest News' },
	{ id: 2, name: 'Most Shared' },
	{ id: 3, name: 'Most read' },
	{ id: 4, name: 'Most commented' },
	{ id: 5, name: 'Most popular news' },
	{ id: 6, name: 'Delhi Electronics' },
	{ id: 7, name: 'Bihar Electronics' },
];

const Header3 = () => {
	return (
		<div
			style={{
				backgroundColor: 'red',
			}}
		>
			<div className="header3">
				<div className="topnav">
					{news.map((n) => (
						<a
							className={n.name === 'Latest News' ? 'active' : ''}
							href={`#${n.name}`}
						>
							{n.name}
						</a>
					))}
				</div>
				<div style={{ color:'white'}}>
					<AiOutlineSearch />
				</div>
			</div>
		</div>
	);
};

export default Header3;
