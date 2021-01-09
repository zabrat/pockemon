import Component from './Home.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    // pokemonsData: selectors.getPokemonsData(state),
});

const mapDispatchToProps = dispatch => ({
    saveCurrentPok: (pokemonName, pokemonData) => dispatch(actions.onSaveCurrentPok(pokemonName, pokemonData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
