import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { searchVideos } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    ownProps: ownProps
});

const mDTP = dispatch => ({
    searchVideos: search => dispatch(searchVideos(search)),
    logoutUser: () => dispatch(logoutUser()),
    uploadVideo: () => dispatch(openModal('uploadVideo')),
    signin: () => dispatch(openModal('signin'))
});

export default withRouter(connect(mSTP, mDTP)(NavBar));