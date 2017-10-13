import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';

let containerStyle = {
    height:'360px',
    width:'369px',
    margin:'auto',
    marginTop:'10px',
    border:'2px solid #F0FF79'
    // background:'url(/images/cleanHousePicOne.jpg) no-repeat center',
    // filter: 'blur(5px)'
};

class QuoteComponent extends React.Component{
    render(){
        return(
            <div style={containerStyle}>
                 <img src='/images/cleanHousePicOne.jpg'></img>
            </div>
        )
    }
}

export default QuoteComponent;
