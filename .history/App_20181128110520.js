import React from 'react';
import Pommodoro from './components/Pommodoro.js';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<Pommodoro />
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
