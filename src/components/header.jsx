import React from 'react';

const Header = () => {
    return (
        <div className='header' style={{ backgroundColor: 'black' }}>
                <h1 style={styles.text}>S H O P P I E S</h1>
                <p style={{ color: 'white', textAlign: 'center', fontFamily:'verdana' }}>Search and nominate your favorite films</p>
        </div>
    );
}
const styles = {
    text: {
        textAlign: 'center',
        fontFamily: "Verdana",
        color: 'white'
    }
}

export default Header;