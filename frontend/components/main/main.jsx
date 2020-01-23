import React from 'react';
import SideBarContainer from '../bars/side_bar_container';
import NavBarContainer from '../bars/nav_bar_container';
import { Link } from 'react-router-dom';
import MainFeedContainer from '../feeds/main_feed_container';

class Main extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div className='main'>
                    <SideBarContainer />
                    <MainFeedContainer />
                </div>
            </div>
        );
    }  
}

export default Main;