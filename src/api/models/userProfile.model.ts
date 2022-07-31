import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

const modelName = "UserProfile";
const modelFields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
const modelConfig = {
  tableName: "UserProfiles",
};

export const UserProfile = sequelize.define(
  modelName,
  modelFields,
  modelConfig
);
