import Component from './Home.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isSubmit: selectors.getIsSubmit(state),
});

const mapDispatchToProps = dispatch => ({
    saveCurrentPok: (pokemonName, pokemonData, pokemonChars) => dispatch(actions.onSaveCurrentPok(pokemonName, pokemonData, pokemonChars)),
    savePokChars: chars => dispatch(actions.onSavePokChars(chars))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
