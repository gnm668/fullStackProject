import React from 'react';
import { Redirect } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);

    }

    handleClick() {
        console.log('hi')
        this.setState({
            redirect: true
        });
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <div className='nav-bar'>
                {this.renderRedirect()}
                <div className='hamburger'></div>
                <div onClick={this.handleClick} className='signin-button'>
                    <div className='button-image'></div>
                    <div className='button-text'>SIGN IN</div>
                </div>
            </div>
        );
    }
}

export default NavBar;

