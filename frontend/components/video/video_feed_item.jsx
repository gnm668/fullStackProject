import React from 'react';
import { Link } from 'react-router-dom';

class VideoFeedItem extends React.Component {
    render() {
        const video = this.props.video;
        return(
            <div>
                <Link to={`/videos/${video.id}` }>
                <video height='118' width='210' src={video.mediaUrl} ></video>
                <h1>{video.title}</h1>
                <div>
                    <p>{video.description}</p>
                </div>
                </Link>
            </div>
        );
    }
}

export default VideoFeedItem;