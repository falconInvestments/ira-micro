const dbConfig = require('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')

// construct the sequelize object using the constructor
let sequelize = null;

    if (process && process.env.DATABASE_URL) {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
                }
              }
            }
        );
    } else {
       sequelize = new Sequelize(
        { // use imported configurations from dbConfig
            database: process.env.DATABASE,
            username: process.env.USER,
            password: process.env.PASSWORD,
            dialect: 'postgres',
            host: process.env.HOST,
        })
    }


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
db.Investments = require('./investmentModel')(sequelize, DataTypes)



db.sequelize.sync({ force: false }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

db.Accounts.belongsTo(db.Users);
db.Users.hasMany(db.Accounts);

db.Accounts.hasMany(db.Investments);
db.Investments.belongsTo(db.Accounts);

module.exports = db
