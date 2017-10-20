import React from 'react';

let styles = {
    errorComponentStyle : {
        zIndex:'1',
        color:'black',
        fontSize:'50px',
        gridArea:'r2C2'
    }
}


const ErrorComponent = (errors) => {
    for(var key in errors){
       
        if(errors[key].length>0){
            console.log("Error", errors[key]);
        }
    }
   return (<div id='formErrorComponent' style={styles.errorComponentStyle}>
               <p>derp</p>
            
            </div>)
}

export default ErrorComponent

