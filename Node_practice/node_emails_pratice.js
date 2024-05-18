let nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '5c319858501384',
        pass: 'ca6881e12ee5fa'
    }
});

const message = {
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

transport.sendMail(message, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});


