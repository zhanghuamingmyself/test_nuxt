import mysql from 'mysql2/promise';
import {DataTypes} from "sequelize";

// const { Sequelize } = require('sequelize');
//
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: process.env.MYSQL_HOST || '172.24.73.24',
//     dialect: 'mysql',
// });
//
// const User = sequelize.define('User', {
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: true,
//         },
//     },
//     // 其他属性和选项
// });
//
// async function createUser() {
//     await sequelize.sync(); // 同步模型和数据库
//
//     const user = await User.create({ username: 'John', email: 'john@example.com' });
//     console.log(user.toJSON());
// }
//
// createUser().catch(console.error);
//



// 创建连接池（提升性能）
const pool = mysql.createPool({
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

export default pool;