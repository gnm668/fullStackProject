import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mSTP = null;

const mDTP = dispatch => ({
    createVideo: video => dispatch(createVideo(video)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP)(VideoForm));