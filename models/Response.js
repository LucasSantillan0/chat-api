const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("response",{
        response: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    })
}