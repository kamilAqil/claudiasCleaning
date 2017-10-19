let express = require('express');
let router = express.Router();

const nodemailer = require ('nodemailer');

// config nodmeailer
let transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.FROMEMAIL,
        pass: process.env.FROMEMAILPASSWORD.toLowerCase()
    }
});



router.post('/',function(req,res){

    // config mail options
    const mailOptions = {
        from: process.env.FROMEMAIL, // sender address
        to: process.env.TOEMAIL, // list of receivers
        subject: 'NEW CLEANING REQUEST', // Subject line
        html: `Email from ${req.body.firstName + " " + req.body.lastName}<br/>
               Phone Number To Call ${req.body.phoneNumber}<br/>
               Date Requested ${req.body.date} `// plain text body
    };

    if (req.body.firstName == undefined || req.body.lastName == undefined ||
        req.body.phoneNumber == undefined || req.body.date == undefined){
            console.log('email not complete to send');
        }else{
            transport.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err)
                    res.send('email not sent');
                }
                else {
                    console.log(info);
                    res.send('Mail transport response',info);
                }
            });
        }

    

    console.log(req.body);
    // take info from post to route
    // and format to send mail to client


    
});

module.exports = router;