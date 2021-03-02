import Component from './Home.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isSubmit: selectors.getIsSubmit(state),
});

const mapDispatchToProps = dispatch => ({
    setCurrentPok: (pokemonName) => dispatch(actions.onSetCurrentPok(pokemonName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);