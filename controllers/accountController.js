const db = require('../models/index')

const Account = db.Accounts;

const addAccount = async (req, res) => {
    let input_data = {
        label: req.body.label,
        balance: req.body.balance,
        annualContribution: req.body.annualContribution,
        userId: req.body.userId,
     }
     const account = await Account.create(input_data)
     
     res.status(200).send(account)
}

const getAllAccounts = async (req, res) => {

    let accounts = await Account.findAll({})
    res.status(200).send(accounts)
}

const getOneAccount = async (req, res) => {
    
    let id = req.params.id

    let accounts = await Account.findOne({where: {id: id}})
    res.status(200).send(accounts)
}

const updateAccount = async (req, res) => {
    let id = req.params.id

    const account = await Account.update(req.body, { where: {id: id}})
    res.status(200).send(account)
}

const deleteAccount = async (req, res) => {
    let id = req.params.id

    await Account.destroy({where :{id: id}})
    res.status(200).send(`account with id: ${id} is deleted`)
}

module.exports = {
    addAccount,
    getAllAccounts,
    getOneAccount,
    updateAccount,
    deleteAccount
}