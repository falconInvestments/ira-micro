const db = require('../models/index')

const Investment = db.Investments;

const addInvestment = async (req, res) => {
    let input_data = {
        name: req.body.name,
        symbol: req.body.symbol,
        type: req.body.type,
        expenseRatio: req.body.expenseRatio,
        nAV: req.body.nAV,
        inceptionDate: req.body.inceptionDate,
        accountId: req.body.accountId
     }
     const investment = await Investment.create(input_data)
     
     res.status(200).send(investment)
}

const getAllInvestments = async (req, res) => {

    let investments = await Investment.findAll({})
    res.status(200).send(investments)
}

const getOneInvestment = async (req, res) => {
    
    let id = req.params.id

    let investments = await Investment.findOne({where: {id: id}})
    res.status(200).send(investments)
}

const updateInvestment = async (req, res) => {
    let id = req.params.id

    const investment = await Investment.update(req.body, { where: {id: id}})
    res.status(200).send(investment)
}

const deleteInvestment = async (req, res) => {
    let id = req.params.id

    await Investment.destroy({where :{id: id}})
    res.status(200).send(`investment with id: ${id} is deleted`)
}

module.exports = {
    addInvestment,
    getAllInvestments,
    getOneInvestment,
    updateInvestment,
    deleteInvestment
}