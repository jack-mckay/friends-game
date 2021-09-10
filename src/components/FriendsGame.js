import React from "react";
import Timer from "./Timer";
import Instructions from "./Instructions";
import Cards from "./Cards";

const friends = ['Rachel', 'Monica', 'Ross', 'Joey', 'Chandler', 'Phoebe', 'David', 'Mike', 'Gunther', 'Janice'];

class FriendsGame extends React.Component {
	constructor(props) {
		super(props);
		this.useMove = this.useMove.bind(this);
		this.getCardToFind = this.getCardToFind.bind(this);
		this.shuffleDeck = this.shuffleDeck.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.addPoint = this.addPoint.bind(this);
		this.state = {
			timerDuration: 20,
			timerVisible: true,
			points: 0,
			movesLeft: 10,
			cards: friends,
			cardsLeft: friends,
			cardToFind: '',
			gameComplete: false
		}
	}

	useMove() {
		if (this.state.movesLeft > 1) {
			this.setState(function (prevState, props) {
				return {movesLeft: prevState.movesLeft - 1}
			});
		} else {
			this.setState(() => ({movesLeft: 0, gameComplete: true}))
		}
	}

	addPoint() {
		this.setState((prevState) => ({points: prevState.points + 1}));
	}

	shuffleDeck(array) {
		let currentIndex = array.length, temporaryValue, randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		this.setState(() => ({cards: array}));
	}

	handlePick(card) {
		if (this.state.cardsLeft.length === 0) {
			this.setState({gameComplete: true});
		} else {
			this.setState((prevState) => ({cardsLeft: prevState.cardsLeft.filter((cardToRemove) => card !== cardToRemove)}));
		}
	}

	getCardToFind(array) {
		const cardToFind = array[Math.floor(Math.random() * array.length)];
		this.setState(() => ({cardToFind: cardToFind}));
		this.setState((prevState) => ({cardsLeft: prevState.cardsLeft.filter((cardToRemove) => cardToFind !== cardToRemove)}));
	}

	componentDidMount() {
		this.shuffleDeck(this.state.cards);
		setTimeout(() => {
			this.getCardToFind(this.state.cards);
			this.setState(() => ({timerVisible: false}))
		}, this.state.timerDuration * 1000);
	}

	render() {
		let message = '';
		if (this.state.gameComplete) {
			if (this.state.points === 0) {
				message = `Oh no! You didn\'t find any of your F.R.I.E.N.D.S. Now they\'re trapped in the internet forever! Drown your sorrows with a meatball sub sandwich and never go on the internet ever again.`
			} else if (this.state.points === 10) {
				message = `Congratulations! You found all of the F.R.I.E.N.D.S. Now let\'s celebrate with a meatball sub sandwich and never go on the internet ever again.`
			} else {
				message = `Well done! You found ${this.state.points} F.R.I.E.N.D.S. Try again to see if you can find them all!`
			}
		}
		return (
			<div>
				{
					this.state.gameComplete ?
						<div className="windows-panel">
							<div className="header">Friends.exe</div>
							<div className="body text-center">
								<h1>{this.state.points === 10 ? 'You Win!' : 'Game Over!'} Score: {this.state.points}</h1>
								<img width={30} src={this.state.points === 10 ? './img/smiley-happy.png' : './img/smiley-dead.png'}/>
								<p>{message}</p>
								<a href="/" className="button">Play Again</a>
							</div>
						</div> :
						this.state.timerVisible ?
							<Timer duration={this.state.timerDuration}/> :
							<Instructions points={this.state.points} movesLeft={this.state.movesLeft} cardToFind={this.state.cardToFind}/>
				}
				<Cards
					gameComplete={this.state.gameComplete}
					cards={this.state.cards}
					cardsLeft={this.state.cardsLeft}
					handlePick={this.handlePick}
					cardToFind={this.state.cardToFind}
					useMove={this.useMove}
					getCardToFind={this.getCardToFind}
					addPoint={this.addPoint}
				/>
			</div>
		)
	}
}

export default FriendsGame;