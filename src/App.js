import Header1 from './components/Header1/Header1';
import Header2 from './components/Header2/Header2';
import Header3 from './components/Header3/Header3';
import News from './components/News/News';
import Trend from './components/Trend/Trend';

function App() {
	return (
		<>
			<Header1 />
			<Header2 />
			<Header3 />
			<div style={{ width: '80%', margin: 'auto' }}>
				<p style={{ fontSize: '12px' }}>News &#62; Latest News</p>
				<h1 style={{ borderBottom: '2px solid black' }}>Latest News</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-start',
						gap: '2rem',
					}}
				>
					<div style={{ flex: 2 }}>
						<News />
					</div>
					<div style={{ flex: 1 }}>
						<Trend />{' '}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
