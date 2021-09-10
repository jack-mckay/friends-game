import Card from "./Card";
import React from "react";

const Cards = (props) => {
	return (
		<div className="cards-container">
			{props.cards.map((card, index) =>
				<Card key={'card-' + index}
					cards={props.cards}
					cardsLeft={props.cardsLeft}
					handlePick={props.handlePick}
					cardToFind={props.cardToFind}
					useMove={props.useMove}
					getCardToFind={props.getCardToFind}
					cardName={card}
					addPoint={props.addPoint}
					gameComplete={props.gameComplete}
				/>
			)}
		</div>
	);
};

export default Cards;