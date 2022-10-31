//Import the sequalize constructor from the library
const Sequalize = require('sequelize');

require('dotenv').config(); 


//create connection to database
const sequalize = new Sequalize('just_tech_news_db', 'username', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port:  3306
});

module.exports = sequalize; 