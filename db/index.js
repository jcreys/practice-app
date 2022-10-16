const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/practice-app-db') //environment or development

module.exports={
    sequelize
}