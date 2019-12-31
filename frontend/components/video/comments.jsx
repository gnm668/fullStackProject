import React from 'react';
import CommentItem from '../'

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
                <div>
                    {comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
                </div>
            </div>
        );
    }
}


export default Comments;