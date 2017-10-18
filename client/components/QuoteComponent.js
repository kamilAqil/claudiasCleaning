import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';

let containerStyle = {
    height:'360px',
    width:'369px',
    margin:'auto',
    marginTop:'10px',
    border:'2px solid #F0FF79',
    position:'relative',
    borderRadius:'10px'
    // background:'url(/images/cleanHousePicOne.jpg) no-repeat center',
    // filter: 'blur(5px)'
};

let formGrid = {
    height:'100%',
    width:'100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 2fr 2fr',
    gridTemplateAreas: `"header header"
                        "r1C1 r1C2"
                        "r2C1 r2C2"`
}

let roomPictureBackgroundStyle = {
    position: 'absolute',
    width:'100%',
    height:'100%',
    borderRadius:'10px',
    top:'0px',
    left:'0px',
    zIndex:'0',
}

let formBackgroundStyle = {
    width:'95%',
    height:'95%',
    position:'absolute',
    backgroundColor:'white',
    top: '2.5%',
    left: '2.5%',
    zIndex:'0',
    borderRadius:'10px',
    filter:'blur(5px) brightness(120%) opacity(76%)'
}

let blackBorder = '1px solid black'

let formGroupInputOneStyle = {
    gridArea:'r1C1',
    zIndex:'1',
    justifySelf:'center',
    alignSelf:'start',
    textAlign:'center'
}

let formGroupInputTwoStyle = {
    gridArea: 'r1C2',
    zIndex: '1',
    justifySelf: 'center',
    alignSelf:'start',
    textAlign:'center'
}

let formGroupInputThreeStyle = {
    gridArea: 'r2C1',
    zIndex: '1',
    justifySelf: 'center',
    alignSelf:'start',
    textAlign:'center'
}

let formGroupInputFourStyle = {
    gridArea: 'r2C2',
    zIndex: '1',
    justifySelf: 'center',
    alignSelf:'start',
    textAlign:'center'
}


let formHeaderStyle = {
    gridArea:'header',
    fontSize:'30px',
    zIndex:'1',
    justifySelf:'center',
    alignSelf:'center'
}

let textAreaStyle = {
    borderRadius : '10px',
    textAlign: 'center',
    border: blackBorder,
    height:'35px',
    fontSize:'15px'
}

let submitButtonStyle = {
    width:'89px',
    height:'23px',
    gridArea:'r2C2',
    zIndex:'1',
    justifySelf:'end',
    alignSelf:'end',
    height:'30%',
    marginBottom:'10%',
    marginRight:'10%',
    borderRadius:'10px',
    backgroundColor:'#004EFF',
    border: '1px solid black',
    color:'white'
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
                <div style={formBackgroundStyle}></div>
                    <div style={formGrid}>
                        <span style={formHeaderStyle}>Get A Quote</span>
                        <div style={formGroupInputOneStyle}>
                            <span>First Name</span><br />
                            <input name='firstName' style={textAreaStyle} placeholder='First Name' onChange={this.handleChange} value={this.state.firstName} />
                        </div>
                        <div style={formGroupInputTwoStyle}>
                            <span>Last Name</span><br />
                            <input name='lastName' style={textAreaStyle} placeholder='Last Name' onChange={this.handleChange} />
                        </div>
                        <div style={formGroupInputThreeStyle}>
                            <span>Phone Number</span><br />
                            <input name='phoneNumber' style={textAreaStyle} placeholder='Phone Number' onChange={this.handleChange} />
                        </div>
                        <div style={formGroupInputFourStyle}>
                            <span>Date of Service</span><br />
                            <input name='dateOfService' style={textAreaStyle} type='date' onChange={this.handleChange} />
                        </div>
                        <button style={submitButtonStyle} onClick={handleFormSubmit}>Submit</button>
                    </div>
                    
            </div>
        )
    }
}

export default QuoteComponent;
