import React from 'react';

class VideoShow extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const video = this.props.video;
        // const mediaUrl = this.props.video.mediaUrl;
        return (    
            <div>
                <video height='700' width='500' src={video.mediaUrl} controls></video>
                <div>
                    <p>{video.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoShow;