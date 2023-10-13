import express from "express";
import morgan from 'morgan'
import cors from 'cors'

import phraseRouter from './routes/phrase.routes.js'


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get("/", (req, res) => {
    res.json({hello: "hola mundo"})
})

app.use("/api", phraseRouter)


export default app;