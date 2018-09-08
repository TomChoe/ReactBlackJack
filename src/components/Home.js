import React, { Component } from 'react';
import Header from '../static/Header';

import Gameboard from './Gameboard';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			click: false
		}
		this.click = this.click.bind(this)
	}

	click() {
		this.setState({
			click: true
		})
	}

	render() {
		return (
			<div>
			  <Header />
			  <h1> Black Jack </h1><br/>
			  {this.state.click ?
			    '' :
			  	<button onClick={this.click}>Start</button>}
			  {this.state.click ? <Gameboard /> : ''}
			</div>
		)
	}
}