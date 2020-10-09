const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

console.log(typeof(process.env.API_KEY))
router.post('/', async (req, res) => {
    sgMail.setApiKey(process.env.API_KEY)
    const msg = {
        to: 'iamupendralohar@gmail.com',
        from: 'ji10drasharma@gmail.com',
        subject: 'Sent with SendGrid',
        html: '<i>Do not reply back to this mail</i>.</br> This is just a test email and ignore it.'
    }
    await sgMail.send(msg)
    res.status(200).json({
        success: true,
        data: 'Mail sent successfully'
    })
})
module.exports = router
