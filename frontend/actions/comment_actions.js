import * as APIUtil from '../util/comment_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    };
};

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

export const fetchComments = () => dispatch => {
    return (
        APIUtil.fetchComments()
            .then(comments => dispatch(receiveAllComments(comments)))
    );
};

export const createComment = comment => dispatch => {
    return (
        APIUtil.createComment(comment)
            .then(comment => dispatch(receiveComment(comment)))
    );
};