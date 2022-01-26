const db = require('../models/index')
const User = db.Users

const addUser = async (req,res) => {
    let input_data = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        password: req.body.password
    }
    const user = await User.create(input_data)
    res.status(200).send(user)
}
const getAllUsers = async (req, res) => {
try {
    let users = await User.findAll({
        include: db.Accounts
    });
    res.status(200).send(users)
} catch (error) {
    console.log(error)
}
}
const getOneUser = async (req, res) => {
    
    let id = req.params.id

    let users = await User.findOne({where: {id: id}, include: db.Accounts})
    res.status(200).send(users)
}

const updateUser = async (req, res) => {
    let id = req.params.id

    const user = await User.update(req.body, { where: {id: id}})
    res.status(200).send(user)
}

const deleteUser = async (req, res) => {
    let id = req.params.id

    await User.destroy({where :{id: id}})
    res.status(200).send(`user with id: ${id} is deleted`)
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}