import Component from './Pokemons.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pokemonsData: selectors.getPokemonsData(state),
});

const mapDispatchToProps = dispatch => ({
    savePokemons: payload => dispatch(actions.onSavePokemons(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
