const express      = require('express'),
      router       = express.Router(),
      nodemailer     = require("nodemailer");



router.post("/send", (req, res) => {
    console.log(req.body.first)
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // hostname
        port: 465,
        secure: true, // use SSL
        tls: {
        ciphers:'SSLv3'
        },
        auth: {
            user: 't.bowesdeangeli@gmail.com',
            pass: 'Q92SXE!Ncsd#jGp'
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

