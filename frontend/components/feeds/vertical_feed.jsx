import React from 'react';
import { shuffle } from '../../util/misc_util';
import { Route } from 'react-router-dom';
import VideoFeedItem from '../video/video_feed_item';

class VerticalFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //shuffle?
        const videos = (this.props.videos);
        return (
            <div id='v-feed' >
                {videos.map(video => <VideoFeedItem key={video.id} video={video} />)}
            </div>
        );
    }
}

export default VerticalFeed;
