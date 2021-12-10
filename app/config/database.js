const mysql = require('mysql2');
const dbConfig = require('./db.config');

var dbPool = mysql.createPool({
    host: dbConfig.database.HOST,
    user: dbConfig.database.USER,
    password: dbConfig.database.PASSWORD,
    database: dbConfig.database.DATABASE
})
/*
dbPool.connect((error)=>{
    if(error) throw error;
    console.info('Connected to database');
})
*/
module.exports = dbPool;
