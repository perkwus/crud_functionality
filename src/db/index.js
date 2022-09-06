const db = {
    users: [
        { id: 1, name: "nicholas" },
    ]
}

const getUsers = () => {
    return db.users
}

const addUser = ({ name }) => {
    let id = db.users.length + 1
    db.users.push({ id, name })
    return id
}

const updateUser = ({ id, name }) => {
    db.users.forEach(user => {
        if (user.id == id) {
            user.name = name
        }
    })
}

const deleteUser = (id) => {
    db.users = db.users.filter(user => user.id != id)
}

module.exports = { getUsers, addUser, updateUser, deleteUser }