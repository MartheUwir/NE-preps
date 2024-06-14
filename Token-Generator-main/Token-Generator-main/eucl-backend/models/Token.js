const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class Token extends Model {}

Token.init({
    meterNumber: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    tokenStatus: {
        type: DataTypes.ENUM('USED', 'NEW', 'EXPIRED'),
        allowNull: false
    },
    tokenValueDays: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    purchasedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Token'
});

module.exports = Token;
