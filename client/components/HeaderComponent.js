import React from 'react';

let styles = {
    headerStyle : {
        backgroundColor: '#FFFFFF',
        border: '3px Solid Black',
        borderRadius: '10px',
        position: 'relative',
        gridArea:'header',
        textAlign:'center'
    },
    titleHeaderStyle : {
       
    },
    phoneNumberStyle : {
        
    }
}


class HeaderComponent extends React.Component{
    render(){
        return(
        <div id='headerContainer' style={styles.headerStyle}>
            <span style={styles.titleHeaderStyle}>Claudia's Cleaning</span>
            <span style={styles.phoneNumberStyle}>(714) 787-8471</span>
        </div>);
    }
}

export default HeaderComponent;