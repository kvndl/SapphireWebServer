var express = require('express');
var router = express.Router();

// To send mail to myself
const nodemailer = require('nodemailer')

// just grabbing my tools
const Captcha = require('../tools/Captcha.js');

// dictionary globals
var realbotQ;
var realbotA;

/* GET contact page. */
router.get('/', async function(req, res, next) {

    await Captcha.getDictionary(async function(dictionary) {

        console.log('--- in contact page route ---');
        console.log(dictionary);

        // get random question from question dictionary
        var botQA = dictionary[Math.floor(Math.random() * dictionary.length)];
        realbotQ = botQA.question;
        realbotA = botQA.answer;

        res.render('contact', {
          title: 'CONTACT',
          question: realbotQ
        });
    });
});

/* POST contact page. */
router.post('/', function(req, res) {
    console.log('--- in post contact route ---');

    let antiBot = req.body.antiBot.toLowerCase();
    console.log(antiBot);

    // // get random question from question dictionary
    // var realBotQ = botQ[Math.floor(Math.random() * botQ.length)];

    // // get index of question
    // var qIndex = botQ.indexOf(realBotQ);

    // // use to get question answer
    // var realBotA = botA[qIndex];

    console.log('Question: ', realbotQ);
    console.log('Answer: ', realbotA);

    // check if captcha was a success / fail
    if (antiBot !== realbotA) {
        // give contact failure view
        console.log('--- Unsuccessful captcha verification.. giving error page ---')

        var errorQ = ('..' + realbotQ);

        res.render('contact-fail', {
          theError: errorQ
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

module.exports = router;