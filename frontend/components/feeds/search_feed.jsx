import React from 'react';
import VideoFeedItem from '../video/video_feed_item';

class SearchFeed extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const videos = (this.props.videos);
        return(
            <div className='search-feed'>
                {videos.map(video => <VideoFeedItem key={video.id} video={video} />)}
            </div>
        );
    };
};

export default SearchFeed;