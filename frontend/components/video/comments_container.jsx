import { connect } from 'react-redux';
import Comments from './comments';
import { openModal } from '../../actions/modal_actions';
import {
    fetchComments,
    createComment,
    deleteComment
} from '../../actions/comment_actions';

const mSTP = state => {
    return { 
        comments: Object.values(state.entities.comments)
    };
};

const mDTP = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),

        signin: () => dispatch(openModal('signin'))
    };
};

export default connect(mSTP, mDTP)(Comments);