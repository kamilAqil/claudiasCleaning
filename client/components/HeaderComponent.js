import React from 'react';

let headerStyle = {
    height:'73px',
    width:'369px',
    backgroundColor:'#FFFFFF',
    border:'3px Solid Black',
    position:'relative'
}

let titleHeaderStyle = {
    marginTop:'7%',
    marginLeft:'10%',
    position:'absolute'
}

let phoneNumberStyle = {
    marginTop: '7%',
    marginLeft: '60%',
    position: 'absolute'
}

class HeaderComponent extends React.Component{
    render(){
        return(
        <div style={headerStyle}>
            <span style={titleHeaderStyle}>Claudia's Cleaning</span>
            <span style={phoneNumberStyle}>(714) 787-8471</span>
        </div>);
    }
}

export default HeaderComponent;