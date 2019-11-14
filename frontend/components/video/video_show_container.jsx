import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
    return {
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: Object.values(state.entities.videos)
}};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mSTP, mDTP)(VideoShow);

