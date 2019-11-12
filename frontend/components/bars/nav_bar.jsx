import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addSigninButtonEffect: false,
            addHamburgerButtonEffect: true
        };

        this.renderRedirect = this.renderRedirect.bind(this);
        this.homeRedirect = this.homeRedirect.bind(this);
        this.uploadRedirect = this.uploadRedirect.bind(this);
        this.toggleSignin = this.toggleSignin.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    componentDidMount() {
        window.setTimeout(function () {
            document.getElementById('ham').style.visibility = 'visible';
        }, 1500);
    }

    renderRedirect() {
        let that = this;
        window.setTimeout(() => that.props.history.push('/signin'), 300); 
    }

    uploadRedirect() {
        this.props.history.push('/videos/new');
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
                onClick={this.renderRedirect}
                onMouseDown={this.toggleSignin}
                className={signinClass.join(' ')}> </svg>
        } else {
            button = <div className='signout-button'
                        onClick={this.logoutUser} >
                        <p>Sign Out</p>
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
                    onClick={this.uploadRedirect} />
                    {button}
                </div>
            </div>
        );
    }
}

export default NavBar;

