var nodemailer = require("nodemailer");
var fs = require('fs');
var path = require('path');

var transport = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    //secure: account.smtp.secure,
    service: 'Gmail',
    auth: {
        user: "winwiretestinghyd@gmail.com",
        pass: "Raju@2673"
    }
});

//console.log("SMTP Configured");

var mailOptions = {
    from: 'winwiretestinghyd@gmail.com', // sender address
    to: 'thimmaraju418@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            
            'path': './Reports/report.html',
			
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		response.send(info);
    }

});