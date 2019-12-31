import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';

// testing
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: Object.values(state.entities.videos).filter(video => {
        return video.id !== parseInt(ownProps.match.params.videoId);
    }),
    ownProps: ownProps
}};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    
    // testing
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mSTP, mDTP)(VideoShow);

