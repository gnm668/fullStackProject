import React from 'react';
import NavBarContainer from '../bars/nav_bar_container';
import { focusOn } from '../../util/ui_util';
import VerticalFeed from '../feeds/v_feed';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
        if (document.querySelector('video')) {
            focusOn('video');
        }
    }

    render() {
        const video = this.props.video;
        // const mediaUrl = this.props.video.mediaUrl;
        if (video) {
            return (    
                <div className='show'>
                    <NavBarContainer />
                    <div className='video-show'>
                        <div className='media'>
                            <video autoPlay src={video.mediaUrl} controls></video>
                            <div className='video-information'>

                                <div className='video-header'>
                                    {video.title}
                                </div>
                                
                                <div className='v-border'></div>

                                <div className='v-show-user'>
                                    {video.user}
                                </div>

                                <div className='video-description'>
                                    {video.description}
                                </div>

                                <div className='v-border'></div>

                            </div>
                        </div>  
                        <VerticalFeed />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default VideoShow;