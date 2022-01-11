// the router file contains all the routes that can be accessed
const accountController = require('../controllers/accountController.js')

// create a Router object from express
const router = require('express').Router()

// add a new account to the table
router.post('/', accountController.addAccount)

// access all the accounts in the table
router.get('/', accountController.getAllAccounts)

// access one account by id
router.get('/:id', accountController.getOneAccount)

// modify one account by id
router.put('/:id', accountController.updateAccount)

// delete one account by id
router.delete('/:id', accountController.deleteAccount)

module.exports = router