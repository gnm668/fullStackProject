import React from 'react';
import { logoutUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

export const greeting = (props) => {
    const user = props.currentUser;
    if (user) {
        return (
            <div>
                {`Welcome ${user.username}!`}
                <button onClick={() => { logoutUser()(dispatch) }}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <span>
                    <Link to="/signup">Sign Up</Link>
                </span>
                <br/>
                <span>
                    <Link to="/signin">Sign In</Link>
                </span>
            </div>
        )
    }
};

