import React from 'react';
// import VideoFeedItem from '../video/video_feed_item';
import { Route } from 'react-router-dom';
import videoShowContainer from '../video/video_show_container';

class VerticalFeed extends React.Component {
    // componentDidMount() {
    //     this.props.fetchVideos();
    // }

    render() {
        return (
            <div className='v-feed'>
                {/* <Route exact={true}
                    path='/videos/:videoId'
                    component={videoShowContainer} /> */}
            </div>
        );
    }
}

export default VerticalFeed;

// {videos.map(video => <VideoFeedItem key={video.id} video={video} />)}