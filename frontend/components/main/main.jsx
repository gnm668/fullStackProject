import React from 'react';
import NavBar from '../bars/nav_bar';

const main = () => (
    <div>
        <header>
            <NavBar />
        </header>

        {/* test div */}
        <div className="test">
        </div>
        {/* test div WILL NEED CURRENT USER FROM GREETING 
        COMPONENT LATER*/} 
    </div>
);

export default main;