import * as APIUtil from '../util/dislike_util';

export const RECEIVE_ALL_DISLIKES = 'RECEIVE_ALL_DISLIKES';
export const RECEIVE_DISLIKE = 'RECEIVE_DISLIKE';
export const REMOVE_DISLIKE = 'REMOVE_DISLIKE';

const receiveAllDislikes = dislikes => {
    return {
        type: RECEIVE_ALL_DISLIKES,
        dislikes
    };
};

const receiveDislike = dislike => {
    return {
        type: RECEIVE_DISLIKE,
        dislike
    };
};

const removeDislike = dislikeId => {
    return {
        type: REMOVE_DISLIKE,
        dislikeId 
    };
};

export const fetchDislikes = () => dispatch => {
    return (
        APIUtil.fetchDislikes()
            .then(dislikes => dispatch(receiveAllDislikes(dislikes)))
    );
};

export const fetchDislike = dislikeId => dispatch => {
    return (
        APIUtil.fetchDislike(dislikeId)
            .then(dislike => dispatch(receiveDislike(dislike)))
    );
};

export const createDislike = dislike => dispatch => {
    return (
        APIUtil.createDislike(dislike)
            .then(dislike => dispatch(receiveDislike(dislike)))
    );
};

export const deleteDislike = dislikeId => dispatch => {
    return (
        APIUtil.deleteDislike(dislikeId)
            .then(() => dispatch(removeDislike(dislikeId)))
    );
};