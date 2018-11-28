import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pommodoro extends React.Component {
	static propTypes = {
		time: PropTypes.number.required
	}
	static defaultProps = {
		time: 0
	}
	render() {
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
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
