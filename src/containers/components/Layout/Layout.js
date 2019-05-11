import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <div>
                {/* <Navbar /> */}
            </div>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;