import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mSTP, mDTP)(NavBar));