import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className='comments'>
                
            </div>
        )
    }
}


export default Comments;