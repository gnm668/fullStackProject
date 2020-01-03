import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const comment = this.props.comment;
        return(
            <div className='comment-item'>

                <svg id='icon'></svg>

                <div className='comment-info'>
                    <div className='comment-header'>
                        <p className='comment-user'>{comment.user}</p>
                        <p className='comment-time'>Time posted</p>
                    </div>
                    <p className='comment-body'>{comment.body}</p>
                </div>
            </div>
        )
    }
}

export default CommentItem;
