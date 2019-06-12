const express      = require('express'),
      router       = express.Router(),
      nodemailer     = require("nodemailer");

router.get("/post", (req, res) => {
    res.send("hi");
})


router.post("/", (req, res) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'taliesin.bowes@zohomail.eu',
            pass: '1Ginandtonic'
        }
    });

    var mailOptions = {
        from: '"My Site Conatct Form" <taliesin.bowes@zohomail.eu>', // sender address (who sends)
        to: 'taliesin.bowes@hotmail.co.uk', // list of receivers (who receives)
        subject: 'Conatct form submision from '+req.body.first, // Subject line
        html: 'From: '+req.body.first+' '+req.body.second+'<br />Email: '+req.body.email+'<br />Phone No: '+req.body.phone+'<br />Comapany: '+req.body.company+'<br />Message: '+req.body.message, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: '+info.response);
    });
    res.redirect("/#contact");
})

module.exports = router;
