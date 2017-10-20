import React from 'react';
import HeaderComponent from './HeaderComponent';
import QuoteComponent from './QuoteComponent';

let styles = {
    mobileContainerStyle : {
        width: '100%',
        height: '100%',
        overflow:'scroll',
        borderRadius: '5px',
        margin: 'auto',
        backgroundColor: '#00CDFF',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 2fr 2fr 2fr',
        gridTemplateAreas: `"header"
                            "quote"
                            "about"
                            "services"`
    }
}

class HomePage extends React.Component {
    render(){
        return (
        <div style={styles.mobileContainerStyle}>
            <HeaderComponent/>
            <QuoteComponent/>
        </div>
        );
    }
}

export default HomePage;
