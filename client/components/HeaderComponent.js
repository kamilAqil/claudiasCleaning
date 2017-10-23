import React from 'react';



class HeaderComponent extends React.Component{
    render(){
        return(
        <div id='headerContainer'>
            <span id='logoSpan'>Claudia's Cleaning</span>
            <span id='phoneNumberSpan'>(714) 787-8471</span>
        </div>);
    }
}

export default HeaderComponent;