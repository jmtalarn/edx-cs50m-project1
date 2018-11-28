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
	formatTwoDigitsNumber(n) {/*  */
		return n > 9 ? "" + n : "0" + n;
	}
	render() {
		let timeMinsAndSecs = `${this.formatTwoDigitsNumber(parseInt(this.props.time / 60))}:${this.formatTwoDigitsNumber(this.props.time % 60)}`;
		return <span className="time">{timeMinsAndSecs}</span>;
	}
	render() {
		const timeMinsAndSecs = let timeMinsAndSecs = `${this.formatTwoDigitsNumber(parseInt(this.props.time / 60))}:${this.formatTwoDigitsNumber(this.props.time % 60)}`;
		return (
			<Text style={Styles.timeDisplay}>
				Open up App.js to start working on your app!
			</Text>
		)
	}
}


