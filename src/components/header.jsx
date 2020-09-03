import React from 'react';

const Header = () => {
    return ( 
        <div className='header' style={{backgroundColor:'black'}}>
            <h1 style={styles.text}>Welcome to OMDB Search</h1>
        </div>
    );
}
const styles = {
    text:{
        textAlign:'center',
        fontFamily:"Arial",
        color: 'white'
    }
}

export default Header;