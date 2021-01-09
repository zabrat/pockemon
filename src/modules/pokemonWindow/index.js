import Component from './PokemonWindow.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pokemonData: selectors.getPokemonData(state),
});

const mapDispatchToProps = dispatch => ({
    closeWindow: () => dispatch(actions.onCloseWindow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
