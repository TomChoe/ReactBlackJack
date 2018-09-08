import React, { Component } from 'react';

import Deck from './Deck';
import Card from './Card';

export default class Gameboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: [],
			playerCards: [],
			dealerCards: []
		}
	}

	createDeck() {
		const deck = this.state.deck;
		const value = [2,3,4,5,6,7,8,9,10];
		const suit = ['D','S','H','C'];
		const face = ['A','J','Q','K'];

		for(let i=0; i < suit.length; i++) {
			for(let j=0; j<value.length; j++) {
				deck.push(<Card value={value[j]} suit={suit[i]} />);
			}
		}

		for(let i=0; i < face.length; i++) {
			for(let j=0; j < suit.length; j++) {
				if(face[i] === 'A') {
					deck.push(<Card value={11} face={face[i]} suit={suit[j]} />)
				} else {
					deck.push(<Card value={10} face={face[i]} suit={suit[j]} />)
				}
			}
		}
	}

	shuffleDeck(deck) {
		console.log('shuffling')
		const shuffled = this.state.deck;
		for(let i=0; i < shuffled.length; i++) {
			let rand = Math.floor(Math.random() * shuffled.length);
			let temp = shuffled[i];
			shuffled[i] = shuffled[rand];
			shuffled[rand] = temp;
		}
	}

	testShowDeck() {
		for(let i=0; i < this.state.deck.length; i++) {
			console.log('this is each card ', this.state.deck[i].props)
		}
	}

	render() {
		this.createDeck();
		this.shuffleDeck(this.state.deck);
		this.testShowDeck();
		return (
			<div>
			  <h1>Gameboard</h1>
			  <Deck /><br/>
			</div>
		)
	}
}