import express, { Request, Response } from "express";
const http = require('http')

const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.post('/post', (request, response) => {
  response.send('post ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
