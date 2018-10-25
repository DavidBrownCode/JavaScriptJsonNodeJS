var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dab0304@gmail.com',
    pass: 'c0mbatc00k'
  }
});

var mailOptions = {
  from: 'dab0304@gmail.com',
  to: 'combat_cook@yahoo.com,davidbrown@fluidwebconcepts.com,fluidwebconceptsllc@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 