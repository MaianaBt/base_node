module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_CONNECTION_STRING,
    dialect: 'mysql',
    define: { timestamps: false },
    operatorsAliases: false,
    logging: false
};