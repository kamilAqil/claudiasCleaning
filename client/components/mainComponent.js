import React from 'react';
import HeaderComponent from './HeaderComponent';
import QuoteComponent from './QuoteComponent';

const mobileContainerStyle = {
    width: '375px',
    height: '973px',
    borderRadius: '5px',
    margin:'auto',
    backgroundColor:'#00CDFF',
    position:'relative'
};

class HomePage extends React.Component {
    render(){
        return (
        <div style={mobileContainerStyle}>
            <HeaderComponent/>
            <QuoteComponent/>
            <p>This is my site. Take a look around!</p>
        </div>
        );
    }
}

export default HomePage;
