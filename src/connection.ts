import { Sequelize } from "sequelize";

export const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        port: +process.env.PORT2,
        dialect: 'mysql',
        pool: {
            max: 15,
            min: 5,
            idle: 20000,
            evict: 15000,
            acquire: 30000
        }
    }
);