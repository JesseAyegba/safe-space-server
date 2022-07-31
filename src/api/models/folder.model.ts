import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";
import { File } from "./file.model";

const modelName = "Folder";
const modelFields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
const modelConfig = { tableName: "Folders" };

export const Folder = sequelize.define(modelName, modelFields, modelConfig);

// Relationships
// Folder => File
Folder.hasMany(File, {
  foreignKey: {
    name: "folderId",
    allowNull: false,
  },
});
File.belongsTo(Folder);
