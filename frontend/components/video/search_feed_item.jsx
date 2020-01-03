import React from 'react';
import { Link } from 'react-router-dom';

class SearchFeedItem extends React.Component {
    constructor(props) {
        super(props);
    };

    previewPlay(e) {
        e.currentTarget.play();
        e.currentTarget.addEventListener('timeupdate', function () {
            if (this.currentTime >= 8) {
                this.pause();
            }
        })
    }

    previewPause(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }


};

export default SearchFeedItem;