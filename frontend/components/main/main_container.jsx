import { connect } from 'react-redux';
import Main from './main';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = state => { return {
    videos: Object.values(state.entities.videos)
}};

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mSTP, mDTP)(Main);

