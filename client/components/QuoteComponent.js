import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';
import axios from 'axios'

let blackBorder = '1px solid black'

let styles = {
    containerStyle : {
        height: '360px',
        width: '369px',
        margin: 'auto',
        marginTop: '10px',
        border: '2px solid #F0FF79',
        position: 'relative',
        borderRadius: '10px'
    },
    formGrid : {
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 2fr 2fr',
        gridTemplateAreas: `"header header"
                        "r1C1 r1C2"
                        "r2C1 r2C2"`
    },
    roomPictureBackgroundStyle : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        top: '0px',
        left: '0px',
        zIndex: '0'
    },
    formBackgroundStyle : {
        width: '95%',
        height: '95%',
        position: 'absolute',
        backgroundColor: 'white',
        top: '2.5%',
        left: '2.5%',
        zIndex: '0',
        borderRadius: '10px',
        filter: 'blur(5px) brightness(120%) opacity(76%)'
    },
    formGroupInputOneStyle : {
        gridArea: 'r1C1',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formGroupInputTwoStyle : {
        gridArea: 'r1C2',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formGroupInputThreeStyle : {
        gridArea: 'r2C1',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formGroupInputFourStyle : {
        gridArea: 'r2C2',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formHeaderStyle : {
        gridArea: 'header',
        fontSize: '30px',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'center'
    },
    textAreaStyle : {
        borderRadius: '10px',
        textAlign: 'center',
        border: blackBorder,
        height: '35px',
        fontSize: '15px'
    },
    submitButtonStyle : {
        width: '89px',
        height: '23px',
        gridArea: 'r2C2',
        zIndex: '1',
        justifySelf: 'end',
        alignSelf: 'end',
        height: '30%',
        marginBottom: '10%',
        marginRight: '10%',
        borderRadius: '10px',
        backgroundColor: '#004EFF',
        border: '1px solid black',
        color: 'white'
    }
}

class QuoteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event){
        // console.log(event.target.name);
        var nameToChange = event.target.name;
        // console.log(typeof nameToChange);
        // console.log(nameToChange);
        // console.log(event.target.value);
        this.setState({[nameToChange]: event.target.value});
        // console.log(this.state);
    }

    handleFormSubmit(){
        console.log('clicked form submit');
        axios.post('/submitForm',{
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            phoneNumber : this.state.phoneNumber,
            date : this.state.dateOfService
        }).then(function(response){
            console.log(response);
        });
    }

    render(){
        return(
            <div style={styles.containerStyle}>
                <img src='/images/cleanHousePicOne.jpg' style={styles.roomPictureBackgroundStyle}></img>
                <div style={styles.formBackgroundStyle}></div>
                    <div style={styles.formGrid}>
                    <span style={styles.formHeaderStyle}>Get A Quote</span>
                    <div style={styles.formGroupInputOneStyle}>
                            <span>First Name</span><br />
                            <input name='firstName' style={styles.textAreaStyle} placeholder='First Name' onChange={this.handleChange} value={this.state.firstName} />
                        </div>
                    <div style={styles.formGroupInputTwoStyle}>
                            <span>Last Name</span><br />
                            <input name='lastName' style={styles.textAreaStyle} placeholder='Last Name' onChange={this.handleChange} />
                        </div>
                    <div style={styles.formGroupInputThreeStyle}>
                            <span>Phone Number</span><br />
                            <input name='phoneNumber' style={styles.textAreaStyle} placeholder='Phone Number' onChange={this.handleChange} />
                        </div>
                    <div style={styles.formGroupInputFourStyle}>
                            <span>Date of Service</span><br />
                            <input name='dateOfService' style={styles.textAreaStyle} type='date' onChange={this.handleChange} />
                        </div>
                    <button style={styles.submitButtonStyle} onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                    
            </div>
        )
    }
}

export default QuoteComponent;
