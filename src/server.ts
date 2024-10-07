import express from 'express'
import routes from './routes'
import bodyParser from 'body-parser'
import cors from 'cors'

const server = express()

server.use(cors({
    origin: '*'
}))

server.use(bodyParser.json()) // for parsing application/json

server.use(routes)

server.listen(3000)
