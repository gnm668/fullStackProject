import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            user_id: null,
            video_id: null
        };
    }

    render() {
        debugger;
        return (
            <div className='comment-form'>

            </div>
        )
    }
}

export default CommentForm;