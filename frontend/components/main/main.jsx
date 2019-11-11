import React from 'react';
import NavBarContainer from '../bars/nav_bar_container';
import { Link } from 'react-router-dom';
import MainFeedContainer from '../feeds/main_feed_container';

class Main extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <NavBarContainer />
                    <MainFeedContainer />
                </header>

                {/* test div */}
                <div className="test">
                    <Link to='/videos/1'>test show</Link>
                    <Link to='/videos/new'>test form</Link>
                </div>
                {/* test div WILL NEED CURRENT USER FROM GREETING 
                COMPONENT LATER*/} 
            </div>
        );
    }  
}

export default Main;