import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
let blackBorder = '1px solid black'

let styles = {
    containerStyle : {
        gridArea: 'quote',
        padding:'5px',
        border: '2px solid #F0FF79',
        position: 'relative',
        borderRadius: '10px',
        justifySelf:'center',
        width:'97%'
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
        width: '100%',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formGroupInputTwoStyle : {
        gridArea: 'r1C2',
        width: '100%',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formGroupInputThreeStyle : {
        gridArea: 'r2C1',
        width: '100%',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center'
    },
    formGroupInputFourStyle : {
        gridArea: 'r2C2',
        width: '100%',
        zIndex: '1',
        justifySelf: 'center',
        alignSelf: 'start',
        textAlign: 'center',
        position:'relative'
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
        width:'60%',
        textAlign: 'center',
        border: blackBorder,
        height: '35px',
        fontSize: '15px'
    },
    submitButtonStyle : {
        width: '16%',
        height: '36%',
        zIndex: '1',
        borderRadius: '5px',
        backgroundColor: '#004EFF',
        border: '1px solid black',
        color: 'white',
        justifySelf: 'end',
        position:'absolute',
        right:'20%',
        bottom:'-40%'
    },
    formStyle : {
       display : 'inherit' 
    }
}

class QuoteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName:'',
            phoneNumber:'',
            dateOfService:'',
            formErrors:[],
            readyToSubmit : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    validateForm(firstName,lastName,phoneNumber,dateOfService){
        let errorsArray = []
        let phoneRegExHyphen = /^\d{1}-\d{3}-\d{3}-\d{4}/;
        let phoneRegExParenthesis = /^\(\d{3}\)\d{3}\-\d{4}/;
        let phoneRegExPlain = /^\d{10}/;
        // if firstName is not empty set firstNameValid
        // to true otherwise push message "set first name"
        //  state.formErrors
        if (firstName ==''){
            errorsArray.push('Please Enter First Name');
        
        }else{
            console.log('firstName is valid');
        }
        // if lastName is not empty set lastNameValid
        // to true otherwise push message "set last name"
        //  state.formErrors
        // console.log('lastname',lastName);
        if (lastName == '') {
            errorsArray.push('Please Enter Last Name');
        } else {
            console.log('lastName is valid');
        }

        // if the phoneNumber does not matches the regEx 
        // then push message "enter valid phone number"
        // otherwise set phoneNumbervalie to true'

        if (phoneNumber.match(phoneRegExPlain) || phoneNumber.match(phoneRegExHyphen) || phoneNumber.match(phoneRegExParenthesis)){
            console.log('phone number valid');
        }else{
            errorsArray.push('Please Enter Valid Phone Number');
        }

        this.setState({formErrors:[...errorsArray]},()=>{
            if (errorsArray.length == 0) {
               
                    console.log('ready to submit');

                    axios.post('/submitForm', {
                        firstName: firstName,
                        lastName: lastName,
                        phoneNumber: phoneNumber,
                        date: dateOfService
                    }).then(function (response) {
                        console.log(response);
                    });
               
            }
        });
        
    }

   
    
    handleChange(event){
        // console.log(event.target.name);
        var nameToChange = event.target.name;
        this.setState({[nameToChange]: event.target.value,
                        formErrors:[]});
    }

    handleFormSubmit(e){
        e.preventDefault();
        console.log('clicked form submit');

        this.validateForm(this.state.firstName,this.state.lastName,
                          this.state.phoneNumber,this.state.dateOfService);   
        
                     
          
        
       
    }

    render(){
        return(
            <div id='formContainer' style={styles.containerStyle}>
                <img src='/images/cleanHousePicOne.jpg' style={styles.roomPictureBackgroundStyle}></img>
                <div style={styles.formBackgroundStyle}></div>
                    <form style={styles.formGrid} onSubmit={this.handleFormSubmit}>
                    <ErrorComponent errors={this.state.formErrors} />
                        <span style={styles.formHeaderStyle}>Get A Quote</span>
                        <div style={styles.formGroupInputOneStyle}>
                            <span>First Name</span><br />
                            <input name='firstName' id='firstName' style={styles.textAreaStyle} 
                            placeholder='First Name' onChange={this.handleChange} value={this.state.firstName}/>
                        </div>
                        <div style={styles.formGroupInputTwoStyle}>
                            <span>Last Name</span><br />
                            <input name='lastName' id='lastName' style={styles.textAreaStyle} 
                            placeholder='Last Name' onChange={this.handleChange}/>
                        </div>
                        <div style={styles.formGroupInputThreeStyle}>
                            <span>Phone Number</span><br />
                            <input type='text' name='phoneNumber' style={styles.textAreaStyle} placeholder='(714)333-4444' 
                            onChange={this.handleChange}/>
                        </div>
                        <div style={styles.formGroupInputFourStyle}>
                            <span>Date of Service</span><br />
                            <input name='dateOfService' style={styles.textAreaStyle} type='date' 
                            onChange={this.handleChange}/>
                            <br/>
                            <input type='submit' value='submit' style={styles.submitButtonStyle}></input>
                        </div>
                    </form>
                    
            </div>
        )
    }
}

export default QuoteComponent;
