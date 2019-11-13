import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    openModal: () => dispatch(openModal('uploadVideo'))
});

export default withRouter(connect(mSTP, mDTP)(NavBar));