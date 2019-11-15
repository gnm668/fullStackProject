import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);

        this.likeClick = this.likeClick.bind(this);
        this.dislikeClick = this.dislikeClick.bind(this);
    }

    componentWillMount() {
        //write selector for these in container
        this.props.fetchLikes();
        this.props.fetchDislikes();
    }

    totalDislikes(videoDislikes) {
        let allDislikes = this.props.dislikes;
        let videoId = parseInt(this.props.ownProps.match.params.videoId);

        for (let i = 0; i < allDislikes.length; ++i) {
            if (allDislikes[i]['video_id'] === videoId) {
                videoDislikes.push(allDislikes[i]);
            }
        }

        return videoDislikes;
    }

    totalLikes(videoLikes) {
        let allLikes = this.props.likes;
        let videoId = parseInt(this.props.ownProps.match.params.videoId);

        for (let i = 0; i < allLikes.length; ++i) {
            if (allLikes[i]['video_id'] === videoId) {
                videoLikes.push(allLikes[i]);
            }
        }

        return videoLikes;
    }

    likedOrDisliked() {
        //returns 1, 0, -1
        const videoId = parseInt(this.props.ownProps.match.params.videoId);
        const likes = this.props.likes;
        const dislikes = this.props.dislikes;
        const currentUser = this.props.currentUser;

        for (let i = 0; i < likes.length; ++i ) {
            // if currentUser has liked the currentVideo return 1
            if (likes[i]['user_id'] === currentUser.id && likes[i]['video_id'] === videoId) {
                return {boolean: 1, like: likes[i]};
            }
        }
        
        for (let i = 0; i < dislikes.length; ++i ) {
            //if currentUser has disliked the currentVideo reurn -1
            if (dislikes[i]['user_id'] === currentUser.id && dislikes[i]['video_id'] === videoId) {
                return {boolean: -1, dislike: dislikes[i]};
            }
        }
            
        //if the current user hasn't liked or disliked the currentVideo return 0;
        return {boolean: 0};
    }

    handleLike() {
        const likedOrDisliked = this.likedOrDisliked();
        const videoId = parseInt(this.props.ownProps.match.params.videoId);
        const userId = this.props.currentUser.id;

        if (likedOrDisliked.boolean === 1) { //currentUser has liked video
            //delete likelike
            this.props.deleteLike(likedOrDisliked.like.id);

            //remove blue and disable from thumbUp
            document.querySelector('.like-cont .like').classList.remove('blue');

        } else if (likedOrDisliked.boolean === -1) { //currentUser has disliked video
            //delete dislike
            this.props.deleteDislike(likedOrDisliked.dislike.id);

            //create like
            this.props.createLike({user_id: userId, video_id: videoId});

            //remove blue and disable from thumbDown 
            document.querySelector('.dislike-cont .dislike').classList.remove('blue');

            //add blue and disable to thumbUp
            document.querySelector('.like-cont .like').classList.add('blue');

        } else {
            //create like
            this.props.createLike({ user_id: userId, video_id: videoId });

            //add blue and disable to thumbUp
            document.querySelector('.like-cont .like').classList.add('blue');
        }
    }

    handleDislike() {
        const likedOrDisliked = this.likedOrDisliked();
        const videoId = parseInt(this.props.ownProps.match.params.videoId);
        const userId = this.props.currentUser.id;

        if (likedOrDisliked.boolean === -1) { //currentUser has disliked video
            //delete Dislike
            this.props.deleteDislike(likedOrDisliked.dislike.id);

            //remove blue and disable from thumbDown
            document.querySelector('.dislike-cont .dislike').classList.remove('blue');

        } else if (likedOrDisliked.boolean === 1) { //currentUser has liked video
            //delete like
            this.props.deleteLike(likedOrDisliked.like.id);

            //create dislike
            this.props.createDislike({ user_id: userId, video_id: videoId });

            //remove blue and disable from thumbUp 
            document.querySelector('.like-cont .like').classList.remove('blue');

            //add blue and disable to thumbDown
            document.querySelector('.dislike-cont .dislike').classList.add('blue');

        } else {
            //create Dislike
            this.props.createDislike({ user_id: userId, video_id: videoId });

            //add blue and disable to thumbDown
            document.querySelector('.dislike-cont .dislike').classList.add('blue');
        }
    }
    
    likeClick() {
        // const videoId = parseInt(this.props.ownProps.match.params.videoId);
        const currentUser = this.props.currentUser;
        if (currentUser) {
            this.handleLike();
        } else {
            this.props.signin();
        }
    }

    dislikeClick() {
        const currentUser = this.props.currentUser;
        if (currentUser) {
            this.handleDislike();
        } else {
            this.props.signin();
        }
    }

    render() {
        let likes = [];
        let dislikes = [];
        likes = this.totalLikes(likes);
        dislikes = this.totalDislikes(dislikes);
        return(
            <div className='likes'>
                <div className='like-cont'
                onClick={this.handleClick}>
                    <svg 
                    onClick={this.likeClick}
                    className='like' xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 24 24"><path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z" /></svg>
                    <div className='num-likes'>{likes.length}</div>
                </div>
                <div className='dislike-cont'>
                    <svg 
                    onClick={this.dislikeClick}
                    className='dislike' xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 24 24"><path d="M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z" /></svg>
                    <div className='num-dislikes'>{dislikes.length}</div>
                </div>
            </div>
        )
    }
}

export default Likes;