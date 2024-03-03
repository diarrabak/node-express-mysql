//Connexion à la base de donnee
    import { Sequelize } from 'sequelize'
    import dotenv from 'dotenv'
    console.log('PORT', dotenv.config())
    
    // const ENV = dotenv.config().parsed
    const connexion = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
    });


    export default connexion