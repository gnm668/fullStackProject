import {
    RECEIVE_ALL_VIDEOS,
    RECEIVE_VIDEO,
    REMOVE_VIDEO
} from '../actions/video_actions';

const videosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({}, action.videos);
        case RECEIVE_VIDEO:
            return Object.assign({}, oldState, { [action.video.id]: action.video });
        case REMOVE_VIDEO:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.videoId]
            return nextState;
        default:
            return oldState;
    }
};

export default videosReducer;