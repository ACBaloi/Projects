const nodemailer = require('nodemailer');

//Using SMTP for Nodemailer Transport
let transport = nodemailer.createTransport(options[ defaults]);

//Testing our Code with Mailtrap

let transports = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'put_your_username_here',
        pass: 'put_your_password_here'
    }
});

const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',  // List of recipients
    subject: 'Design Your Model S| Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

transports.sendMail(message, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});

//Sending an HTML Email

const messageHTML = {
    from: 'elonmusk@tesla.com',
    to: 'to@email.com',
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car! </h1><p>Get your <b>Tesla</b> today!</p>'
}

//Sending  email with an attachment

let transport2 = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'put_your_username_here',
        pass: 'put_your_password_here'
    }
});

const messageAttachment = {
    from: 'elonmusk@tesla.com',
    to: 'to@email.com',
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car! </h1><p>Get your <b>Tesla</b> today!</p>',
    attachments: [
        { //Use a URL as an attachment
            filename: 'your-testla.png',
            path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
        }
    ]
};

transport2.sendMail(message, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});


