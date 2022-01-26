
module.exports = (sequelize, DataTypes) => {

    const Investment = sequelize.define('investment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expenseRatio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nAV: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        inceptionDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Investment
}