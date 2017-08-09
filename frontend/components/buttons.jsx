import React from 'react';

class Buttons extends React.Component {

  hit() {
    this.props.hit()
  }

  reset() {
    this.props.reset()
  }

  render() {
    return (
      <div>
        <button onClick={this.hit.bind(this)}>hit</button>
        <button onClick={this.reset.bind(this)}>redeal</button>
      </div>
    )
  }
}

export default Buttons;
