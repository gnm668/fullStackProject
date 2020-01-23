import {
    RECEIVE_ALL_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../actions/like_actions';

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return Object.assign({}, oldState, action.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, oldState, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.likeId];
            return nextState;
        default:
            return oldState;
    };
};

export default likesReducer;