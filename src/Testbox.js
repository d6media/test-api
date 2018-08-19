import React, { Component } from 'react';
import Draggable from 'react-draggable';


class TestBox extends Component {
	render(){
		return(
			<Draggable>
			<div className="TestBox">
				{this.props.text}
			</div>	
			</Draggable>
		)
	}
} 

export default TestBox;