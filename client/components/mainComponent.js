import React from 'react';
import HeaderComponent from './HeaderComponent';
import QuoteComponent from './QuoteComponent';
import AboutComponent from './AboutComponent';
import ServicesComponent from './ServicesComponent';


class HomePage extends React.Component {
    render(){
        return (
        <div id='mainContainer'>
            <HeaderComponent/>
            <QuoteComponent/>
            <AboutComponent/>
            <ServicesComponent/>
        </div>
        );
    }
}

export default HomePage;
