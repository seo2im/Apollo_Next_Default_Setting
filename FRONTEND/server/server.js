/*
*   This set custom server
*   Custom server can logging with cache / session etc... 
*/
const express = require('express')
const next = require('next')

const port = 9000 /* Your port */
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    server.listen(port, err => {
        if (err)
            throw err
        console.log(`${port} server ready!!`)
    })
})