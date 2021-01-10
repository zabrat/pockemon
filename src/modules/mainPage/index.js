import Component from './MainPage.jsx';
import * as actions from './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    savePokemons: pokemonsData => dispatch(actions.onSavePokemons(pokemonsData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
