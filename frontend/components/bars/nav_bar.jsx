import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            addSigninButtonEffect: false,
            addHamburgerButtonEffect: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.toggleSignin = this.toggleSignin.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    componentDidMount() {
        window.setTimeout(function () {
            document.getElementById('ham').style.visibility = 'visible';
        }, 1500);
    }

    handleClick() {
        this.setState({
            redirect: true
        });
        
    }

    renderRedirect() {
        if (this.state.redirect) {
            let that = this;
            window.setTimeout(() => that.props.history.push('/signin'), 500);
        }
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

        let hamburgerClass = ['hamburger-circle'];
        if (this.state.addHamburgerButtonEffect) {
            hamburgerClass.push('effect');
        }

        return (
            <div className='nav-bar'>
                {this.renderRedirect()}
                <div id={'ham'} className={hamburgerClass.join(' ')}></div>
                <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/icon-hamburger-menu.svg' 
                className='hamburger'
                onMouseDownCapture={this.toggleHamburger}
                onMouseUpCapture={this.toggleHamburger}></svg>
                <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/button-sign-in.svg' 
                onClick={this.handleClick} 
                onMouseDown={this.toggleSignin}
                className={signinClass.join(' ')}> </svg>
                {/* <div onClick={this.handleClick} className='signin-button'>
                    <div className='button-image'></div>
                    <div className='button-text'>SIGN IN</div>
                </div> */}
                
            </div>
        );
    }
}

export default withRouter(NavBar);

