import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';

let containerStyle = {
    height:'360px',
    width:'369px',
    margin:'auto',
    marginTop:'10px',
    border:'2px solid #F0FF79',
    position:'relative',
    borderRadius:'10px',
    overflow:'hidden'
    // background:'url(/images/cleanHousePicOne.jpg) no-repeat center',
    // filter: 'blur(5px)'
};

let roomPictureBackgroundStyle = {
    position: 'absolute',
    width:'100%',
    height:'100%',
    borderRadius:'10px',
    top:'0px',
    left:'0px',
    zIndex:'0'
}

let formBackgroundStyle = {
    width:'95%',
    height:'95%',
    position:'absolute',
    position:'relative',
    backgroundColor:'white',
    top: '2.5%',
    left: '2.5%',
    zIndex:'1',
    borderRadius:'10px',
    filter:'blur(5px) brightness(120%) opacity(76%)'
}

let formGroupStyle = {
    textAlign: 'center'
}

let formStyle = {
    position:'absolute',
    top: '2.5%',
    left: '2.5%',
    zIndex:'1',
    textAlign:'center'
}

let textAreaStyle = {
    borderRadius : '10px',
    textAlign: 'center'
}


class QuoteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // console.log(event.target.name);
        var nameToChange = event.target.name;
        // console.log(typeof nameToChange);
        // console.log(nameToChange);
        // console.log(event.target.value);
        this.setState({[nameToChange]: event.target.value});
        console.log(this.state);
    }

    

    render(){
        return(
            <div style={containerStyle}>
                <img src='/images/cleanHousePicOne.jpg' style={roomPictureBackgroundStyle}></img>
                <div style={formBackgroundStyle}/>
                <form style={formStyle}>
                    <div style={formGroupStyle}>
                        <span>First Name</span><br/>
                        <textarea name='firstName' style={textAreaStyle} placeholder='First Name' onChange={this.handleChange} value={this.state.firstName} />
                    </div>
                    <div style={formGroupStyle}>
                        <span>Last Name</span><br />
                        <textarea name='lastName' style={textAreaStyle} placeholder='Last Name' onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default QuoteComponent;
