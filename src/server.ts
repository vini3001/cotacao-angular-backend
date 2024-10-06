import express from 'express'
import routes from './routes'
import bodyParser from 'body-parser'

const server = express()

server.use(bodyParser.json()) // for parsing application/json

server.use(routes)

server.listen(3000)