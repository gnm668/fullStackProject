import React from 'react';
//add loading later
import { LinearProgress } from '@material-ui/core';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            addSigninButtonEffect: false,
            addHamburgerButtonEffect: true,
            homeBubble: false,
            searchBubble: false,
            videoBubble: false
        };

        this.homeBubble = this.homeBubble.bind(this);
        this.searchBubble = this.searchBubble.bind(this);
        this.videoBubble = this.videoBubble.bind(this);
        this.homeRedirect = this.homeRedirect.bind(this);
        this.uploadVideo = this.uploadVideo.bind(this);
        this.toggleSignin = this.toggleSignin.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    // componentDidMount() {
    //     window.setTimeout(function () {
    //         document.getElementById('ham').style.visibility = 'visible';
    //     }, 1500);
    // }

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

    homeBubble() {
        this.setState( { homeBubble: !this.state.homeBubble });
    }

    searchBubble() {
        this.setState( { searchBubble: !this.state.searchBubble });
    }

    videoBubble() {
        this.setState( { videoBubble: !this.state.videoBubble });
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
        //home bubble
        let homeBubbleClass = ['home-bubble'];
        if (this.state.homeBubble) {
            homeBubbleClass.push('effect');
        }
        //search bubble
        let searchBubbleClass = ['search-bubble'];
        if (this.state.searchBubble) {
            searchBubbleClass.push('effect');
        }
        //video bubble
        let videoBubbleClass = ['video-bubble'];
        if (this.state.videoBubble) {
            videoBubbleClass.push('effect');
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
                    {/* <div id={'ham'} className={hamburgerClass.join(' ')}>
                    </div> */}

                    {/* <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/icon-hamburger-menu.svg' 
                    className='hamburger'
                    onMouseDownCapture={this.toggleHamburger}
                    onMouseUpCapture={this.toggleHamburger}> */}
                    {/* </svg> */}

                    <svg 
                    className='home' 
                    onMouseEnter={this.homeBubble} 
                    onMouseLeave={this.homeBubble}
                    onClick={this.homeRedirect} 
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#FFFFFF' d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" /></svg>

                    <div className='logo-container' onClick={this.homeRedirect}>
                        <svg src='/Users/al/Desktop/FSP/Tube/app/assets/images/you-tube-2017-icon-seeklogo.com-4.svg'
                            className='logo'
                        />
                        <div className='title'>
                            Tub-Tub
                        </div>
                    </div>
                </div>

                <div className='center'>
                    <input type="text"
                    placeholder='Search'
                    className='search'
                    onChange={this.handleInput('search')}
                    />
                    <button
                    onMouseEnter={this.searchBubble}
                    onMouseLeave={this.searchBubble}
                    >
                        <svg className='search-icon' width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <title>720CA7FD-48B0-4AF8-9536-BFCA168CE34C</title>
                                            <desc>Created with sketchtool.</desc>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Youtube-Above-The-Fold-/-Logged-Out" transform="translate(-900.000000, -20.000000)" fill="#757575" fillRule="nonzero">
                                                    <g id="Top-Bar">
                                                        <g id="Search-Bar" transform="translate(300.000000, 12.000000)">
                                                            <g id="Button_Search" transform="translate(575.000000, 0.000000)">
                                                                <g id="Icon_Search" transform="translate(25.000000, 8.000000)">
                                                                    <g id="Group">
                                                                        <path d="M11.3375464,10.1466297 L15.7533531,14.5624364 L14.5624364,15.7533531 L10.1466297,11.3375464 C9.08406223,12.1493593 7.75624004,12.6315789 6.31578947,12.6315789 C2.82767528,12.6315789 0,9.80390366 0,6.31578947 C0,2.82767528 2.82767528,0 6.31578947,0 C9.80390366,0 12.6315789,2.82767528 12.6315789,6.31578947 C12.6315789,7.75624004 12.1493593,9.08406223 11.3375464,10.1466297 L11.3375464,10.1466297 Z M6.31578947,10.9473684 C8.87373987,10.9473684 10.9473684,8.87373987 10.9473684,6.31578947 C10.9473684,3.75783907 8.87373987,1.68421053 6.31578947,1.68421053 C3.75783907,1.68421053 1.68421053,3.75783907 1.68421053,6.31578947 C1.68421053,8.87373987 3.75783907,10.9473684 6.31578947,10.9473684 Z" id="Shape"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                    </svg>
                    </button>
                </div>

                <div className='right-side'>
                    {/* <div className='upload-button'
                    onClick={this.uploadRedirect} >
                        <p>Up</p>
                    </div> */}
                    <svg 
                    onMouseEnter={this.videoBubble}
                    onMouseLeave={this.videoBubble}
                    src='/Users/al/Desktop/FSP/Tube/app/assets/images/video_call_24px.svg'
                    className='upload-button'
                    onClick={this.uploadVideo} />
                    {button}
                </div>


                <div className={homeBubbleClass.join(' ')}>
                    Home
                </div>

                <div className={searchBubbleClass.join(' ')}> 
                    Search
                </div>

                <div className={videoBubbleClass.join(' ')}> 
                    Create a Video or Post
                </div>


            </div>
        );
    }
}

export default NavBar;

