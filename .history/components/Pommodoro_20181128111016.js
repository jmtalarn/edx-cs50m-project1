
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class Pommodoro extends React.Component {
	constructor() {
		super();
		this.state = {
			rest: (5 * 60),
			work: (25 * 60),
			time: (25 * 60),
			pause: false,
			fase: "work"
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	toggleWorkRest = () => {/*  */
		let nextFase = this.state.fase == "work" ? "rest" : "work";
		let nextTime = nextFase == "work" ? this.state.work : this.state.rest;
		this.setState({
			...this.state,
			fase: nextFase, time: nextTime
		});
	}
	tick() {
		if (this.state.time > 0 && !this.state.pause) {
			this.setState({
				...this.state,
				time: this.state.time - 1,
			});

		}
		if (this.state.time == 0) {
			this.toggleWorkRest();
		}
	}
	togglePause = () => {/*  */
		this.setState({ ...this.state, pause: !this.state.pause });
	}
	setTimeValue = (timer, value) => {/*  */
		let newState = { ...this.state };
		newState[ timer ] = value;
		this.setState(newState);
	}
	resetPommodoro = () => {/*  */
		this.setState = { ...this.state, time: this.state.work, pause: false, fase: "work" }
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
