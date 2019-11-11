import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';

const mSTP = null;

const mDTP = dispatch => ({
    createVideo: video => dispatch(createVideo(video))
});

export default connect(mSTP, mDTP)(VideoForm);