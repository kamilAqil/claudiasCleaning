import React from 'react';

const ErrorComponent = (errors) => {
    
    let errorsArray = errors.errors;

    return(
            <div id="errorContainer" >
                {errorsArray.map((error,index)=>{
                    return(<div key={index}>{index+1}. {error}</div>)
                })}
            </div>
    )     
};

export default ErrorComponent

