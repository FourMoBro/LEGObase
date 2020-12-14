import React, { useEffect, useState } from 'react';
import './App.css';
import PartCount from './components/PartCount';
import PartLoadingComponent from './components/PartLoading';

function App() {
	const PartLoading = PartLoadingComponent(PartCount);
	const [appState, setAppState] = useState({
		loading: false,
		parts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:4001/graphql/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((parts) => {
				setAppState({ loading: false, parts: parts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Parts</h1>
			<PartLoading isLoading={appState.loading} parts={appState.parts} />
		</div>
	);
}
export default App;