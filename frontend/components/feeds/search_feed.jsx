import React from 'react';
import SearchFeedItem from '../video/search_feed_item';

class SearchFeed extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const videos = (this.props.videos);
        return(
            <div className='search-feed'>
                {videos.map(video => <SearchFeedItem key={video.id} video={video} />)}
            </div>
        );
    };
};

export default SearchFeed;