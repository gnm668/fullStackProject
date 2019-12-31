import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            commentSwitch: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.signinCheck = this.signinCheck.bind(this);
        this.commentSwitch = this.commentSwitch.bind(this);
        this.cancelSwitch = this.cancelSwitch.bind(this);
    };

    commentSwitch() {
        if (!this.state.commentSwitch && this.props.currentUser) {
            this.setState({ commentSwitch: !this.state.commentSwitch });
        };
    };

    cancelSwitch() {
        if (this.state.commentSwitch) {
            this.setState({ commentSwitch: !this.state.commentSwitch });
        };
    };

    signinCheck() {
        if (!this.props.currentUser) {
            this.props.signin();
        } else {
            this.commentSwitch();
        };
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
        this.setState({ body: '' });
        this.cancelSwitch();
    };

    commentButton() {
        if (this.props.currentUser && this.state.commentSwitch) {
            return (
                <div className='comment-buttons'>
                    <p onClick={this.cancelSwitch}>
                        CANCEL
                    </p>

                    <button>COMMENT</button>
                </div>
            );
        } else {
            return
        };
    };

    render() {
        return (
            <div className='comment-form'>

                <svg id='icon'></svg>

                <form onSubmit={this.handleSubmit}>

                    <div className='comment-field'>
                        <input 
                        type='text-area'
                        placeholder='Add a public comment...'
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                        onFocus={this.signinCheck}
                        />

                        {this.commentButton()}

                    </div>

                </form>

            </div>
        )
    };
};

export default CommentForm;