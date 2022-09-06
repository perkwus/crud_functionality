const express = require('express')
const db = require("./db")

const app = express()

app.use(express.json())

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

app.get("/users", getAllUsers)
function getAllUsers(req, res) {
    let allUsers = db.getUsers();

    return res.status(200).json(allUsers)
}

app.post("/users", createUser)
function createUser(req, res) {
    let id = db.addUser({ name: req.body.user })

    return res.status(201).json({ created: true, id})
}

app.patch("/users/:id", updateUser)
function updateUser(req, res) {
    let name = req.body.user
    let {id} = req.params

    db.updateUser({ id, name })

    return res.status(200).json({ id, name })
}

app.delete("/users/:id", deleteUser)
function deleteUser(req, res) {
    let {id} = req.params

    db.deleteUser(id)

    return res.status(200).json({ deleted: true, id })
}

app.listen(3000, () => {
    console.log("listening on port 3000 (penis)")
})