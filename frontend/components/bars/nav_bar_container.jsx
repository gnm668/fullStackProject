import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    logoutUser: () => dispatch(logoutUser()),
    uploadVideo: () => dispatch(openModal('uploadVideo')),
    signin: () => dispatch(openModal('signin'))
});

export default withRouter(connect(mSTP, mDTP)(NavBar));