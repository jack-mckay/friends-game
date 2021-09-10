import React from "react";

const Instructions = (props) => {
	return (
		<div className="windows-panel">
			<div className="header">Friends.exe</div>
			<div className="instructions-box">
				<div>
					<h1>Where is: {props.cardToFind}?</h1>
					<h2>Score: {props.points}</h2>
					<h3>Moves left: <span style={{color: props.movesLeft <= 5 && 'red'}}>{props.movesLeft}</span></h3>
				</div>
				<img className="mobile-hide" src={`./img/${props.cardToFind.toLowerCase()}.jpg`}/>
			</div>
		</div>
	);
};

export default Instructions;