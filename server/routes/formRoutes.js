let express = require('express');
let router = express.Router();

const nodemailer = require ('nodemailer');

// config nodmeailer
let transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.FROMEMAIL,
        pass: process.env.FROMEMAILPASSWORD
    }
});



router.post('/',function(req,res){

    // config mail options
    const mailOptions = {
        from: 'sender@email.com', // sender address
        to: 'to@email.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Your html here</p>'// plain text body
    };
    console.log(req.body);
    // take info from post to route
    // and format to send mail to client


    res.send('response from server form route');
});

module.exports = router;