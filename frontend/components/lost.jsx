import React from 'react';
import { withRouter } from 'react-router-dom';

class Lost extends React.Component {
    constructor(props) {
        super(props);

        this.homeRedirect = this.homeRedirect.bind(this);
    }

    homeRedirect() {
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='fourOfour'>
                <div className='lost' >
                    <p className='lost-in-time' >You've been sent back in time</p>
                    <p className='no-internet' >There's no internet here...</p>
                    <p className='present' 
                    onClick={this.homeRedirect} >
                        Return to the present (Home)</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Lost);