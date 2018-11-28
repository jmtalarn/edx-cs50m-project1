import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Styles from './Stylesheet'

export default class TimeDisplay extends React.Component {
	static propTypes = {
		time: PropTypes.number.isRequired
	}
	static defaultProps = {
		time: 0
	}
	render() {
		return (
			<Text style={Styles.timeDisplay}>
				Open up App.js to start working on your app!
		</Text>
		)
	}
}


