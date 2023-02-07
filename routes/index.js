var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  // service: 'mail.bluebeetechnologies.com',
  service: 'gmail',
  port: '465',
  auth: {
    user: 'bluebeeglobal@gmail.com',
    pass: 'rrcqupkkjtvevixe'
  }
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blue Bee Technologies' });
});

router.post('/send-email', (req, res, next) => {
  console.log('sdsd')
  console.log(req)
  let details = {
    from: req.body.email,
    to: 'bluebeeglobal@gmail.com',
    // to: 'prakash@bluebeetechnologies.com',
    subject: 'Contact Us',
    text: `Name: ${req.body.name} \n
           Surname: ${req.body.surname} \n
           Email: ${req.body.email} \n
           Message: ${req.body.message} \n`
  }
  
  mailTransporter.sendMail(details, (err) => {
    console.log(err)
  })
  res.redirect('/');
});

module.exports = router;
