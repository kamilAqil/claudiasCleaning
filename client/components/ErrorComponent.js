import React from 'react';

let styles = {
    errorComponentStyle : {
        zIndex:'1',
        color:'black',
        fontSize:'20px',
        gridArea:'r2C2'
    }
}

const ErrorComponent = (errors) => {
    
    let errorsArray = errors.errors;

    return(
            <div id="errorContainer" style={styles.errorComponentStyle}>
                {errorsArray.map((error)=>{
                    return(<div>{error}</div>)
                })}
            </div>
    )     
};

export default ErrorComponent

