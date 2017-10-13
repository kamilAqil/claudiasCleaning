import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';

let containerStyle = {
    height:'360px',
    width:'100%',
    border:'2px solid #F0FF79',
    background:'url(/images/cleanHousePicOne.jpg) no-repeat center'
};

class QuoteComponent extends React.Component{
    render(){
        return(
            <div style={containerStyle}>
                {/* <img src='/images/cleanHousePicOne.jpg'></img> */}
            </div>
        )
    }
}

export default QuoteComponent;
