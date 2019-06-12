const express      = require('express'),
      router       = express.Router(),
      nodemailer     = require("nodemailer");



router.post("/send", (req, res) => {
    console.log(req.body.first)
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: 'taliesin.bowes@hotmail.co.uk',
            pass: 'B9HwKFFpjb2zP9ZGjzZK*'
        }
    });


    var mailOptions = {
        from: '"My Site Conatct Form" <taliesin.bowes@hotmail.co.uk>', // sender address (who sends)
        to: 'taliesin.bowes@hotmail.co.uk', // list of receivers (who receives)
        subject: 'Conatct form submision from '+req.body.first, // Subject line
        html: 'From: '+req.body.first+' '+req.body.second+'<br />Email: '+req.body.email+'<br />Phone No: '+req.body.phone+'<br />Comapany: '+req.body.company+'<br />Message: '+req.body.message, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
    res.redirect("/#contact");
})

module.exports = router;
