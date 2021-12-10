require('dotenv').config()

module.exports = {
    database: {
        HOST: process.env.DB_HOST || "localhost",
        USER: process.env.DB_USER || "user",
        PASSWORD: process.env.DB_PASSWORD || "password",
        DATABASE: process.env.DB_NAME || "database",
    },
    itemsPerPage: 10
}