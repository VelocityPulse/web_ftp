import React from 'react';
import './App.css';
import BodySection from "./ConnectionSection/BodySection";

function Header() {
	return (
		<header className="App-header">
			<div className="App-title">FTP web interface</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="App-footer">
			<div className="App-credits"> Made by cchameyr </div>
		</footer>
	)
}

function App() {
	return (
		<div className="App">
			<Header/>
			<BodySection/>
			<Footer/>
		</div>
	);
}

export default App;
