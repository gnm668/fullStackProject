import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const comments = this.props.comments;
        debugger;
        return (
            <div className='comments'>
                <div>
                    {comments.body}
                </div>
            </div>
        )
    }
}


export default Comments;