import React from 'react';

let styles = {
    servicesComponentStyle:{
        zIndex:'1',
        gridArea:'services',
        backgroundColor:'#FFFFFF',
        border:'1px solid black',
        borderRadius:'10px',
        justifySelf:'center',
        width:'97%'
    }
};

const ServicesComponent = () => {
    return(
            <div id='servicesComponent' style={styles.servicesComponentStyle}>
                services component
            </div>
    );
}


export default ServicesComponent; 