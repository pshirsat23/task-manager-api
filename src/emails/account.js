const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.USEREMAIL,
        pass: process.env.PASSWORD

    }
})

const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        from: process.env.USEREMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        from: process.env.USEREMAIL,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


































// const options = {
//     to: process.env.USEREMAIL,
//     from: process.env.USEREMAIL,
//     subject: 'Thanks for joining in!',
//     text: 'Welcome to the app. Let me know how you get along with the app.'
// }

// transporter.sendMail(options, function(err, info) {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(info.response)
// })