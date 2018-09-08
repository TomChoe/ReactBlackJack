import React, { Component } from 'react';

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

	deal() {
		let player = this.state.playerCards;
		let dealer = this.state.dealerCards;
		let dek = this.state.deck;
		for(let i=0; i<4; i++) {
			if(player.length < 1) {
				console.log('dealing player', i)
				player.push(dek.shift())
			} else if(dealer.length < 1) {
				console.log('dealing dealer', i)
				dealer.push(dek.shift())
			} else if(player.length < 2) {
				console.log('dealing player', i)
				player.push(dek.shift())
			} else if(dealer.length < 2) {
				console.log('dealing dealer', i)
				dealer.push(dek.shift())
			}
		}
		console.log('player cards ', player);	
		console.log('dealer cards ', dealer);
		console.log('remaining deck of cards should be 48 ', dek)
	}

	render() {
		this.createDeck();
		this.shuffleDeck(this.state.deck);
		this.deal();
		return (
			<div>
			  <h1>Gameboard</h1>
			  
			</div>
		)
	}
}