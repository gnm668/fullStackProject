import React from 'react';
import NavBarContainer from '../bars/nav_bar_container';
import { focusOn } from '../../util/ui_util';
import VerticalFeed from '../feeds/vertical_feed';
import LikesContainer from './likes_container';
import CommentsContainer from './comments_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    componentDidMount() {
        // this.props.fetchVideo(this.props.match.params.videoId);
    
        // Commented out requests because of S3
        this.props.fetchVideos();
        
        //test
        this.props.fetchComments();

        if (document.querySelector('.media video')) {
            focusOn('.media video');
        }
    }

    componentDidUpdate() {
        if (document.querySelector('.media video')) {
            focusOn('.media video');
        }
    }

    render() {

        const video = this.props.video;
        const videos = this.props.videos;

        // const mediaUrl = this.props.video.mediaUrl;
        let date = '';

        if (this.props.video) {
            const rubyDate = this.props.video.created_at.slice(0, 10);
            const dateObj = new Date(rubyDate);
            const month = dateObj.toLocaleString('default', { month: 'short' });
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            date = month + ' ' + day.toString() + ', ' + year.toString();
        } 

        if (video) {

            return (    
                <div className='show'>
                    <NavBarContainer />
                    <div className='video-show-container'>
                        <div className='video-show'>
                            <div className='media'>
                                <video autoPlay src={video.mediaUrl} controls></video>
                                <div className='video-information'>

                                    <div className='video-header'>
                                        <div className='title'>{video.title}</div>
                                        <div className='subheader'>
                                            <div className='left'>
                                                <div className='views'>Views Placeholder • </div>
                                                <div className='date'>{date}</div>
                                            </div>
                                            <LikesContainer ownProps={this.props.ownProps} />
                                        </div>
                                    </div>
                                    
                                    <div className='v-border'></div>
                                    
                                    <div id='v-info-con'>
                                        <svg id='icon'></svg>
                                        <div className='v-show-user'>
                                            <div id='user'>{video.user}</div>
                                            <div className='video-description'>
                                                {video.description}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='v-border'></div>
                                    
                                    <CommentsContainer />
                                    
                                </div>
                            </div>  
                            <VerticalFeed videos={videos} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default VideoShow;