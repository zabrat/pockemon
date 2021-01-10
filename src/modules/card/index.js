import Component from './Card.jsx';
import * as actions from './actions';
import * as selectors from './selectores';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    deleteCard: cardId => dispatch(actions.onDeleteCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
