import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const comment = this.props.comment;
        return(
            <div className='comment-item'>
                <p>{comment.user}</p>
                <p>{comment.body}</p>
            </div>
        )
    }
}

export default CommentItem;
