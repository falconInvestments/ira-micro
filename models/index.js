const dbConfig = require('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    { 
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
    })


sequelize.authenticate()
    .then(() => { 
        console.log("connected to Postgres DB")
    })
    .catch(e => {
        console.log('unable to connect to Postgres DB' + e)
    })


const db = {}

db.sequelize = sequelize

db.Users = require('./userModel')(sequelize, DataTypes)
db.Accounts = require('./accountModel')(sequelize, DataTypes)


db.sequelize.sync({ force: false }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

db.Accounts.belongsTo(db.Users);
db.Users.hasMany(db.Accounts);

module.exports = db
