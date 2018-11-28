import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default class TimeDisplay extends React.Component {
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


