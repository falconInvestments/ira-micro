module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        annualContribution: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        newUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return Account
}