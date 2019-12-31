import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();

        const videoId = {
            video_id: parseInt(this.props.ownProps.match.params.videoId)
        };
       
        const userId = {
            user_id: this.props.currentUser.id 
        };

        const comment = Object.assign({}, this.state, videoId, userId);

        this.props.createComment(comment);

    };

    render() {
        return (
            <div className='comment-form'>

                <form onSubmit={this.handleSubmit}>

                    <svg id='icon'></svg>

                    <div className='comment-field'>
                        <input 
                        type='text'
                        placeholder='Add a public comment...'
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                        />
                    </div>

                    <button>COMMENT</button>

                </form>

            </div>
        )
    };
};

export default CommentForm;