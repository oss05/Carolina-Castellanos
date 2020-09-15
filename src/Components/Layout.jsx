import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
    <React.Fragment>
        <Navbar state={props.state}
        languageSignal={props.languageSignal}
        />
        {props.children}
        <Footer />
    </React.Fragment>
    )
}

export default Layout;