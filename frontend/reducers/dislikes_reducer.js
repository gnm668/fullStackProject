import {
    RECEIVE_ALL_DISLIKES,
    RECEIVE_DISLIKE,
    REMOVE_DISLIKE
} from '../actions/dislike_actions';

const dislikesReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_DISLIKES:
            return Object.assign({}, oldState, action.dislikes);
        case RECEIVE_DISLIKE:
            return Object.assign({}, oldState, { [action.dislike.id]: action.dislike });
        case REMOVE_DISLIKE:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.dislikeId]
            return nextState;
        default:
            return oldState;
    }
}

export default dislikesReducer;