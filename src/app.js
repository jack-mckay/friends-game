import React, { useState } from 'react';
import ReactDOM from "react-dom";
import WelcomeScreen from './components/WelcomeScreen';
import FriendsGame from './components/FriendsGame';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.startGame = this.startGame.bind(this);
		this.state = {
			gameStarted: false
		}
	}

	startGame() {
		this.setState(() => ({gameStarted: true}));
	}

	render() {
		if (!this.state.gameStarted) {
			return (
				<WelcomeScreen startGame={this.startGame}/>
			)
		}
		else {
			return (
				<FriendsGame/>
			)
		}
	}
}



ReactDOM.render(<App/>, document.getElementById('app'));