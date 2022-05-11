import React from 'react';
import './Header1.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineWifi } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineCrown } from 'react-icons/ai';

const Header1 = () => {
	return (
		<div style={{ backgroundColor: '#1E1E1E' }}>
			<ul>
				<div className="link-dev">
					<li>
						<a href="#home">
							English
							<div className="dropdown">
								<button className="dropbtn">
									<IoMdArrowDropdown />
								</button>
								<div className="dropdown-content">
									<a href="#">Link 1</a>
									<a href="#">Link 2</a>
									<a href="#">Link 3</a>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#news">Epaper</a>
					</li>
					<li>
						<a href="#contact">GadgetsNow</a>
					</li>
				</div>
				<div className="info-div">
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#800080',
							padding: '0.1rem',
							marginRight: '2rem',
						}}
					>
						{' '}
						<div style={{ color: 'goldenrod', fontSize: '22px' }}>
							<AiOutlineCrown />
						</div>
						<p style={{ marginLeft: '0.5rem' }}>
							Keep reading,keep earning TimesPoints!!
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: '2rem',
						}}
					>
						<p style={{ marginRight: '1rem' }}>SIGN IN</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: '0.5rem',
								fontSize: '18px',
							}}
						>
							<AiOutlineTwitter />
							<FiFacebook />
							<AiOutlineWifi />
							<AiOutlineYoutube />
						</div>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default Header1;
