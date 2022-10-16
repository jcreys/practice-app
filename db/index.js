const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/practice-app-db') //environment or development

const User = sequelize.define('user',
{
    firstName: Sequelize.STRING,
})

const Task = sequelize.define('task', {
    name: Sequelize.STRING
})
module.exports={
    sequelize,
    User,
    Task,
}

