const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("word",{
        word: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    })
}