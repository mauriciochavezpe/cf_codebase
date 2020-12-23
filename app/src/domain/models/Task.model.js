const { sequelize, DataTypes } = require('../../config/conection');

const Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
 
 
})



module.exports = Task;