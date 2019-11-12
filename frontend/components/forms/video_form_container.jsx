import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mSTP = null;

const mDTP = dispatch => ({
    createVideo: video => dispatch(createVideo(video))
});

export default withRouter(connect(mSTP, mDTP)(VideoForm));