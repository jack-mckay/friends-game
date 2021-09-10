import React from 'react';

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.duration
		}
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			let { count } = this.state;
			this.setState({
				count: count - 1
			})
		}, 1000)
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.count !== this.state.count && this.state.count === 0) {
			clearInterval(this.timer);

		}
	}
	componentWillUnmount() {
		// fix Warning: Can't perform a React state update on an unmounted component
		this.setState = (state,callback)=>{
			return false;
		};
	}
	render() {
		let { count } = this.state;
		return (
			<div className="windows-panel">
				<div className="header">Friends.exe</div>
				<div className="instructions-box text-center">
					<h1>Remember the cards! Game starts in: {count}</h1>
				</div>
			</div>
		);
	}
}
