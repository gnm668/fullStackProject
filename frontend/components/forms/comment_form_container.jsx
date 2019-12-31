import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = null;

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        singin: () => dispatch(openModal('signin'))
    }
};

export default connect(mSTP, mDTP)(CommentForm);
