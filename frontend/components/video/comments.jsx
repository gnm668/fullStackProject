import React from 'react';
import CommentItem from './comment_item';
import CommentFormContainer from '../forms/comment_form_container';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const comments = this.props.comments;
        return (
            <div className='comments'>
                <CommentFormContainer ownProps={this.props.ownProps} />
                <div>
                    {comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
                </div>
            </div>
        );
    }
}


export default Comments;