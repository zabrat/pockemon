import Component from './MainPage.jsx';
import * as actions from './actions';
import * as selectors from './selectores';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pokemonsData: selectors.getPokemonsData(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
