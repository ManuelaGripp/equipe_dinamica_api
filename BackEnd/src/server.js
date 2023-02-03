const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./database/db')
const routes = require('./routes/members')
require('dotenv').config()

global.__basedir = __dirname;

const app = express()

db.connect()

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.use('/api', routes)

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})


