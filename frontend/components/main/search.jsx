import React from 'react';
import SearchFeedContainer from '../feeds/search_feed_container';
import SideBarContainer from '../bars/side_bar_container';
import NavBarContainer from '../bars/nav_bar_container';

class Search extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div className='search-page'>
                <SideBarContainer />
                <NavBarContainer />

                <SearchFeedContainer />
            </div>
        );
    };
};

export default Search;