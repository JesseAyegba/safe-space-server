import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

const modelName = "File";
const modelFields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
const modelConfig = {
  tableName: "Files",
};

export const File = sequelize.define(modelName, modelFields, modelConfig);
