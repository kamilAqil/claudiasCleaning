import React from 'react';

let styles = {
    servicesComponentStyle:{
        zIndex:'1',
        gridArea:'services',
        backgroundColor:'#FFFFFF',
        border:'1px solid black',
        borderRadius:'10px',
        justifySelf:'center',
        width:'97%',
        marginBottom:'1%'
    }
};

const ServicesComponent = () => {
    return(
            <div id='servicesComponent'>
                <h3 id='servicesHeader'>Services</h3>
                <div id='serviceOneContainer'>
                    <img src="../images/cleaningIcons/carpetCleaning.svg" 
                    class='serviceImageSvg' id='serviceOneImage'/>
                    <p class='serviceDescription' 
                    id='serviceOneDescription'>
                    I does the carpet cleaning and stuff
                    </p>
                </div>
            </div>
    );
}


export default ServicesComponent; 