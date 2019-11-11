import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const video = this.props.video;
        // const mediaUrl = this.props.video.mediaUrl;
        if (video) {
            return (    
                <div className='video-show'>
                    <video height='400' width='700' src={video.mediaUrl} controls></video>
                    <div>
                        <h1>{video.title}</h1>
                        <p>{video.description}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default VideoShow;