import { connect } from 'react-redux';
import Likes from './likes';
import { openModal } from '../../actions/modal_actions';
import { 
    fetchLikes,
    createLike,
    deleteLike,
    } from '../../actions/like_actions';
import {
    fetchDislikes,
    createDislike,
    deleteDislike,
} from '../../actions/dislike_actions';

const mSTP = state => {
    return {
        likes: Object.values(state.entities.likes),
        dislikes: Object.values(state.entities.dislikes),
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = dispatch => ({
    fetchLikes: () => dispatch(fetchLikes()),
    fetchDislikes: () => dispatch(fetchDislikes()),

    createLike: like => dispatch(createLike(like)),
    createDislike: dislike => dispatch(createDislike(dislike)),

    deleteLike: likeId => dispatch(deleteLike(likeId)),
    deleteDislike: dislikeId => dispatch(deleteDislike(dislikeId)),

    signin: () => dispatch(openModal('signin'))
});

export default connect(mSTP, mDTP)(Likes);