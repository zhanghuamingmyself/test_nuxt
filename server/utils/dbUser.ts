import {DataTypes} from "sequelize";
import {sequelize} from "./db";

const User = sequelize.define('zhm_users', {
    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        field: 'username',
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        field: 'email',
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    // 其他属性和选项
});

export async function createUser() {
    await sequelize.sync(); // 同步模型和数据库

    const user = await User.create({username: 'John', email: 'john@example.com'});

    return user.toJSON();
}

