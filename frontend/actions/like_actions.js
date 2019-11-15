import * as APIUtil from '../util/like_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveAllLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    };
};

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    };
};

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId
    };
};

export const fetchLikes = () => dispatch => {
    return (
        APIUtil.fetchLikes()
            .then(likes => dispatch(receiveAllLikes(likes)))
    );
};

export const fetchLike = () => dispatch => {
    return (
        APIUtil.fetchLike(like)
            .then(like => dispatch(receiveLike(like)))
    );
};

export const createLike = like => dispatch => {
    return ( 
        APIUtil.createLike(like)
            .then(like => dispatch(receiveLike(like)))
    );
};

export const deleteLike = likeId => dispatch => {
    return (
        APIUtil.deleteLike(likeId)
            .then(() => dispatch(removeLike(likeId)))
    );
};