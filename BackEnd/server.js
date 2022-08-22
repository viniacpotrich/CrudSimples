require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const express = require('express')

const app = express()
const routes = require('./src/routes')

app.use(express.json())
app.use(routes)
app.use(cookieParser())
app.use(cors())



const mongoose = require('mongoose')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.j8ihqzv.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('banco conectado com sucessso!')
    })
    .catch((err) => console.log(err))


app.listen(15151, function(){
    console.log("App escuta o servidor na porta 15151")
})