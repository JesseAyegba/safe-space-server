import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";
import { File } from "./file.model";
import { Folder } from "./folder.model";

const modelName = "User";
const modelFields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const modelConfig = { tableName: "Users" };

export const User = sequelize.define(modelName, modelFields, modelConfig);

// Relationships
// User => Folder
User.hasMany(Folder, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
Folder.belongsTo(User, {
  foreignKey: {
    name: "userId",
  },
});
// User => File
User.hasMany(File, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
File.belongsTo(User, {
  foreignKey: {
    name: "userId",
  },
});
