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
		return <Button onPress={this.props.togglePause} title="PAUSE" />
	}
}
