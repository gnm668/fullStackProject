import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
    return {
    video: state.entities.videos[ownProps.match.params.videoId]
}};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default connect(mSTP, mDTP)(VideoShow);

