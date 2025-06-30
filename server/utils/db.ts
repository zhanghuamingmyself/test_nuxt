import mysql from 'mysql2/promise';
import {Sequelize} from "sequelize";

export const sequelize: Sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || 'hc_zhm',
    process.env.MYSQL_USER || 'root',
    process.env.MYSQL_PASSWORD || 'root',
    {
        host: process.env.MYSQL_HOST || '172.24.73.24',
        port: parseInt(process.env.MYSQL_PORT || '3307'),
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        dialect: 'mysql',
    });


// 创建连接池（提升性能）
const sitPool: mysql.Pool = mysql.createPool({
    host: process.env.MYSQL_HOST || '172.24.73.24',
    port: parseInt(process.env.MYSQL_PORT || '3307'),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'hc_iot',
    waitForConnections: true,
    connectionLimit: 10,
    supportBigNumbers: true,
    bigNumberStrings: true

});

// 创建连接池（提升性能）
const prodPool: mysql.Pool = mysql.createPool({
    host: process.env.MYSQL_HOST || '124.222.53.28',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'yfI96R$9qhV^',
    database: process.env.MYSQL_DATABASE || 'hc_iot',
    waitForConnections: true,
    connectionLimit: 10,
    supportBigNumbers: true,
    bigNumberStrings: true

});


export const pool: mysql.Pool = prodPool

