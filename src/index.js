const express = require('express')

const app = express()

app.get("/", (req, res) => {
    console.log(req)
    res.status(200).json({ hello: "world" })    
})

app.get("/users/:user", (req, res) => {
    console.log(req.params)
    res.status(200).json({
        res: "hello " + req.params.user
    })
})

app.get("/hello", helloHandler)

function helloHandler(req, res) {
    console.log(req)
    res.send("<h1>hewwo</h1>")
}

app.listen(3000, () => {
    console.log("penis2")
}
)
