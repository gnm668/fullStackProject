import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }
}


export default Comments;