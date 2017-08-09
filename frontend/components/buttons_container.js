import { connect } from 'react-redux';
import Buttons from './buttons.jsx';
import Actions from '../actions/actions.js';

const mapDispatchToProps = dispatch => {
  return ({
    hit: () => dispatch(Actions.hit()),
    reset: () =>  dispatch(Actions.reset()),
  })
}

const ButtonsContainer = connect(
  null,
  mapDispatchToProps
)(Buttons)

export default ButtonsContainer;
