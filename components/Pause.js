import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

export default class Pause extends React.Component {
	static propTypes = {
		togglePause: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props);
	}

	render() {
		<Button onPress={this.props.togglePause} value="PAUSE" />
	}
}
