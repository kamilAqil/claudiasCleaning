import React from 'react';

let styles = {
    aboutComponentContainerStyle : {
        zIndex: '1',
        gridArea:'about',
        border:'1px solid black',
        borderRadius:'10px',
        backgroundColor:'#FFFFFF',
        justifySelf:'center',
        width:'97%'
    }
}; 

const AboutComponent = () => {

    return (
                <div id='aboutComponent' style={styles.aboutComponentContainerStyle}>
                   
                </div>
    )
}; 


export default AboutComponent;