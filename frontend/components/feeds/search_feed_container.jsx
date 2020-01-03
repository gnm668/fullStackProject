import { connect } from 'react-redux';
import SearchFeed from './search_feed';

const mSTP = state => {
    return {
        videos: Object.values(state.entities.videos)
    };
};

const mDTP = null;

export default connect(mSTP, mDTP)(SearchFeed);