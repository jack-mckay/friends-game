import React from "react";

const WelcomeScreen = (props) => {
	return (
		<div className="welcome-screen windows-panel text-center">
			<div className="header">Friends.exe</div>
			<div className="body">
				<h1>The cast of</h1>
				<img width={500} src="./img/friendsLogo.png" alt="friends"/>
				<h1>Where are they now?</h1>
				<h2 className="dark">Digital Edition</h2>
				<p>Mama Mia! Famous Days of our Lives star Joey Tribbiani has decided to get <em>on line</em>.
					But there’s a problem – he's accidentally spilled marinara sauce from his meatball sub sandwich all over the wires of his new PC,
					causing all of his F.R.I.E.N.D.S to become trapped inside an internet-based card game!
				</p>
				<p>Use your memory skills to find the F.R.I.E.N.D hidden behind each of the cards. But be careful - You only have <u>10</u> moves to save them. Good Luck!</p>
				<button onClick={props.startGame}>Start game</button>
			</div>
		</div>
	)
};

export default WelcomeScreen;