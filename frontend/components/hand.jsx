import React from 'react';

class Hand extends React.Component {
  constructor() {
    super()

    this._generateList = () => {
      return this.props.cards.map(
        card => (
          <div key={card.name+card.suit}>{card.name + " of " + card.suit}</div>
        )
      )
    }
  }

  render() {
    return (
      <div>
        <div>score: {this.props.score}</div>
        <br/>
        <div>{this._generateList()}</div>
      </div>
    )
  }
}

export default Hand;
