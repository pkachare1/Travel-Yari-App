
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'travle.trap@gmail.com',
        pass: 'trap@123'
    }
});

app.get('/send',function(req,res){
    var mailOptions = {
        // Comma separated list of recipients
        to: '"'+req.query.fName +''+ req.query.lName+'"<'+ req.query.email +'>',
        // Subject of the message
        subject: 'Booking Confirmation ✔', //
        // HTML body
        html: '<h1>Thank you,</h1>'+
        '<pre>'+req.query.fName +' '+ req.query.lName +'('+ req.query.cNo +')'+
        ' will depart for '+ req.query.location +' on '+ req.query.toDate +
        ' and return on '+  req.query.fromDate +
        ' <h3>Your Booking is confirmed</h3>'
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end('error');
        }else{
            console.log('Message sent: ' + response.message);
            res.end('sent');
        }
    });
});

app.listen(3003,function(){
    console.log('Express Started on Port 3003');
});