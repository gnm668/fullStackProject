import React from 'react';
import VideoFeedItem from '../video/video_feed_item';
import { Route } from 'react-router-dom';
import videoShowContainer from '../video/video_show_container';

class MainFeed extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const { videos } = this.props;
        return (
            <div className='main-feed'>
                <Route exact={true} 
                path='/videos/:videoId' 
                component={videoShowContainer} />

                {videos.map(video => <VideoFeedItem key={video.id} video={video}/>)}
            </div>
        );
    }
}

export default MainFeed;