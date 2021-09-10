import React from "react";

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.wrongCard = this.wrongCard.bind(this);
		this.displayCard = this.displayCard.bind(this);
		this.state = {
			correct: false,
			visible: true,
			incorrect: false,
			timerDuration: 20
		}
	}

	wrongCard() {
		this.setState({incorrect: true, visible: true}, () => {
			setTimeout(() => this.setState({incorrect: false, visible: false}), 600)
		})
	}

	displayCard(cardToDisplay) {
		if (!this.state.visible) {
			this.props.useMove();
		}

		if (cardToDisplay === this.props.cardToFind) {
			this.setState((prevState) => ({
				visible: true,
				correct: true
			}));

			this.props.handlePick(cardToDisplay);
			this.props.addPoint();
			this.props.getCardToFind(this.props.cardsLeft);

		} else if (!this.state.visible) {
			this.wrongCard(cardToDisplay);
		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState(() => ({
				visible: false
			}));
		}, this.state.timerDuration * 1000);
	}

	render() {
		const backgroundStyle = {
			backgroundImage: `url(./img/${this.props.cardName.toLowerCase()}.jpg)`
		};

		return (
			<div className={`card ${(this.state.visible || this.props.gameComplete) && 'visible'} ${this.state.incorrect && 'incorrect'} ${this.state.correct && 'correct'}`} onClick={(e) => {
				this.displayCard(this.props.cardName)
			}}>
				<div className="card-inner">
					<div className="flip-card-front">
					</div>
					<div className="flip-card-back">
						<div style={backgroundStyle} className={`card-img ${this.props.cardName}`}>
							<p>{this.props.cardName}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}