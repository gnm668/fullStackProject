import React from 'react';
//add loading later
import { LinearProgress } from '@material-ui/core';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addSigninButtonEffect: false,
            addHamburgerButtonEffect: true
        };

        this.homeRedirect = this.homeRedirect.bind(this);
        this.uploadVideo = this.uploadVideo.bind(this);
        this.toggleSignin = this.toggleSignin.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    componentDidMount() {
        window.setTimeout(function () {
            document.getElementById('ham').style.visibility = 'visible';
        }, 1500);
    }

    uploadVideo() {
        if (this.props.currentUser) {
            this.props.uploadVideo();
        } else {
            this.props.signin();
        }
    }

    homeRedirect() {
        this.props.history.push('/');
    }

    logoutUser() {
        this.props.logoutUser();
    }

    toggleHamburger(){
        //toggles hamburger button state for render
        this.setState({ addHamburgerButtonEffect: !this.state.addHamburgerButtonEffect});
    }

    toggleSignin() {
        // toggles signin button state for render 
        this.setState({addSigninButtonEffect: !this.state.addSigninButtonEffect});
    }

    render() {

        // adds 'effect' class to signinbutton
        let signinClass = ['signin-button'];
        if (this.state.addSigninButtonEffect) {
            signinClass.push('effect');
        }
        //adds 'effect' cass to hamburger button 
        let hamburgerClass = ['hamburger-circle'];
        if (this.state.addHamburgerButtonEffect) {
            hamburgerClass.push('effect');
        }

        let button = null;
        if (!this.props.currentUser) {
            button = <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/button-sign-in.svg'
                // onClick={this.renderRedirect}
                // onMouseDown={this.toggleSignin}
                onClick={this.props.signin}
                className={signinClass.join(' ')}> </svg>
        } else {
            button = <div className='signout-button'
                        onClick={this.logoutUser} >
                        <p>Logout</p>
                    </div>
        }

        return (
            <div className='nav-bar'>
                <div className='left-side'>
                    <div id={'ham'} className={hamburgerClass.join(' ')}>
                    </div>

                    <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/icon-hamburger-menu.svg' 
                    className='hamburger'
                    onMouseDownCapture={this.toggleHamburger}
                    onMouseUpCapture={this.toggleHamburger}>
                    </svg>

                    <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/you-tube-2017-icon-seeklogo.com-4.svg'
                        className='logo'
                        onClick={this.homeRedirect}
                    />
                </div>

                <div className='right-side'>
                    {/* <div className='upload-button'
                    onClick={this.uploadRedirect} >
                        <p>Up</p>
                    </div> */}
                    <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/video_call_24px.svg'
                    className='upload-button'
                    onClick={this.uploadVideo} />
                    {button}
                </div>
            </div>
        );
    }
}

export default NavBar;

