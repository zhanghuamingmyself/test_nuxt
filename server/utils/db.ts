import mysql from 'mysql2/promise';

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