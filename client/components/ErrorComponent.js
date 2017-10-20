import React from 'react';

let styles = {
    errorComponentStyle : {
        zIndex:'1',
        color:'black',
        fontSize:'50px',
        gridArea:'r2C2'
    }
}


const ErrorComponent = (formErrors) => {
   console.log(formErrors);
    return (<div id='formErrorComponent' style={styles.errorComponentStyle}>
        <p>words</p>

    </div>)
}

export default ErrorComponent

