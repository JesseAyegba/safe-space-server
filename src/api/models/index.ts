import { sequelize } from "../../config/database";

// Checks the DB connection
export const checkDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

// Syncs the DB: Creates the tables if they don't exist
// Should use migrations in production
export const syncDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully");
  } catch (error) {
    console.log(error);
    console.log("Error syncing database");
  }
};
