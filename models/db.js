const Sequelize = require('sequelize')

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('postapp', 'root', 'kronosdt19',{
    host: "localhost",
    dialect: "mysql"
})

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
