import { connect } from 'react-redux';
import Hand from './hand.jsx';
import Actions from '../actions/actions.js';

const mapStateToProps = state => {
  return ({
    cards: state.hand,
    score: state.score
  })
};

const HandContainer = connect(
  mapStateToProps,
  null
)(Hand);

export default HandContainer;
