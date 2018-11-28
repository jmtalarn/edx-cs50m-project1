
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
