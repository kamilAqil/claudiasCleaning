import React from 'react';
import BackgroundImage from '../images/cleanHousePicOne.jpg';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
let blackBorder = '1px solid black'

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
            <div id='formContainer' >
                <img src='/images/cleanHousePicOne.jpg' id='roomPictureBackgroundStyle' ></img>
                <div id='formBackground' ></div>
                    <form id='formGrid' onSubmit={this.handleFormSubmit}>
                    <ErrorComponent errors={this.state.formErrors} />
                        <span id='quoteFormHeader' >Get A Quote</span>
                        <div id='formGroupInputOne' >
                            <span>First Name</span><br />
                            <input name='firstName' id='firstName' class='textAreaStyle' 
                            placeholder='First Name' onChange={this.handleChange} value={this.state.firstName}/>
                        </div>
                        <div id='formGroupInputTwo'>
                            <span>Last Name</span><br />
                            <input name='lastName' id='lastName' class='textAreaStyle' 
                            placeholder='Last Name' onChange={this.handleChange}/>
                        </div>
                        <div id='formGroupInputThree'>
                            <span>Phone Number</span><br />
                            <input type='text' name='phoneNumber' class='textAreaStyle' placeholder='(714)333-4444' 
                            onChange={this.handleChange}/>
                        </div>
                        <div id='formGroupInputFour'>
                            <span>Date of Service</span><br />
                            <input name='dateOfService' class='textAreaStyle' type='date' 
                            onChange={this.handleChange}/>
                            <br/>
                            <input type='submit' value='submit' id='formSubmitButton' ></input>
                        </div>
                    </form>
                    
            </div>
        )
    }
}

export default QuoteComponent;
