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
		return <Text>Open up App.js to start working on your app!</Text>
	}
}


