import React from 'react';
import NavBar from '../bars/nav_bar';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        return (
            <div>
                <header>
                    <NavBar />
                </header>

                {/* test div */}
                <div className="test">
                    <Link to='/videos/1'>test show</Link>
                </div>
                {/* test div WILL NEED CURRENT USER FROM GREETING 
                COMPONENT LATER*/} 
            </div>
        );
    }  
}

export default Main;