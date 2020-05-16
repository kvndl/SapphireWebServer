var express = require('express');
var router = express.Router();
request = require('request');

// reCaptcha
var Recaptcha = require('express-recaptcha').RecaptchaV2;
var recaptcha = new Recaptcha('6LezLPgUAAAAAFs7ebb5R6nWKSTWjgKc97OqEloZ', 'process.env.RECAPTCHA_SECRET_KEY');

// To send mail to myself
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'NPS'
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'ABOUT'
    });
});

/* GET code page. */
router.get('/code', function(req, res, next) {
    res.render('code', {
        title: 'CODE PAGE'
    });
});

/* GET media page. */
router.get('/media', function(req, res, next) {
    res.render('media', {
        title: 'MEDIA PAGE'
    });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', {
      title: 'CONTACT'
    });
});

/* POST contact page. */
router.post('/contact', function(req, res) {
    console.log('--- in post contact route ---');

    console.log('--- recaptcha stuffs ---');
    let antiBot = req.body.antiBot.toLowerCase();
    console.log(antiBot);

    // check if captcha was a success / fail
    if (antiBot !== 'yellow') {
        // give contact failure view
        console.log('--- Unsuccessful captcha verification.. giving error page ---')
        res.render('contact-fail', {
          theError: "..what color is the sun again?"
        });
    } else {
        // successful captcha verification
        console.log('--- Successful captcha verification.. sending form ---');
        // start up the smtp server
        const smtpServer = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        })

        // spin up a new email
        const mailMessage = {
            from: 'sender in form',
            to: process.env.GMAIL_USER,
            subject: '-- New message from contact form --',
            text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        }

        // send that beautify message
        smtpServer.sendMail(mailMessage, (error, response) => {
            if (error) {
                res.render('contact-fail', {
                  theError: "..dag nabit."
                });
            } else {
                res.render('contact-success');
            }
        })
    }
});

/* GET secret page. */
router.get('/secret', function(req, res, next) {
    res.render('secret');
});

module.exports = router;