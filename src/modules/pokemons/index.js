import Component from './Pokemons.jsx';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pokemonsData: selectors.getPokemonsData(state),
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
