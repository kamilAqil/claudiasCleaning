import React from 'react';
import HeaderComponent from './HeaderComponent';
import QuoteComponent from './QuoteComponent';
import AboutComponent from './AboutComponent';
import ServicesComponent from './ServicesComponent';
let styles = {
    mobileContainerStyle : {
        width: '100%',
        height: '1080px',
        overflow:'scroll',
        borderRadius: '5px',
        margin: 'auto',
        backgroundColor: '#00CDFF',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridRowGap:'10px',
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
        <div id='mainContainer' style={styles.mobileContainerStyle}>
            <HeaderComponent/>
            <QuoteComponent/>
            <AboutComponent/>
            <ServicesComponent/>
        </div>
        );
    }
}

export default HomePage;
