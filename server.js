const express = require('express')
const cors = require('cors')


// Route Files
const sendGrid = require('./routes/sendGrid')

const app = express()

app.use(express.json())

app.use(cors())
app.use('/sendgrid', sendGrid)

const PORT = process.env.PORT;

// Listener
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})