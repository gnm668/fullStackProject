import React from 'react';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '', 
            videoFile: null,
            videoUrl: null
        };

        this.handleFile = this.handleFile.bind(this);
        
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.querySelector('.modal-child').classList.add('file');
    }

    handleFile(e) {
        //attaches videoFile for submit
        //extracts file for preview

        const videoFile = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ videoFile: videoFile, videoUrl: fileReader.result});
            document.querySelector('.modal-child').classList.add('upload');
        };

        if (videoFile) {
            fileReader.readAsDataURL(videoFile);
        };
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    activateInput() {
        document.querySelector('input').click();
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[user_id]', 1);
        formData.append('video[media]', this.state.videoFile);
        this.props.createVideo(formData);
        this.props.closeModal();
    };

    render() {
        const preview = this.state.videoUrl ? <video id='preview' controls src={this.state.videoUrl} /> : null;

        if (!this.state.videoFile) {
            return (
                <div 
                className='video-form-file'
                onClick={this.activateInput} >
                    <input type="file"
                    accept=".mov, .mp4"
                    onChange={this.handleFile} />
                    <p>Upload</p>
                </div>
            );
        } else {
            let titleClass = ['title'];
            if (this.state.title.length > 0) {
                titleClass.push('effect');
            }

            let descriptClass = ['descript'];
            if (this.state.description.length > 0) {
                descriptClass.push('effect');
            }

            return (
              <div className='video-form-text'>
                    {preview}
                    <p>Upload Video</p>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            type='text'
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                            />
                        <label className={titleClass.join(' ')} id='title' >Title (required)</label>
                        <br/>
                        <textarea 
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                            />
                        <label className={descriptClass.join(' ')} id='description' >Description (required)</label>
                        <button>Next</button>
                        <div className='cancel'
                        onClick={this.props.closeModal}>Cancel</div>
                    </form>
              </div>
            );
        }
    };
}

export default VideoForm;