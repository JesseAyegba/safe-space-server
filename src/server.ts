import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";
import { foldersRouter } from "./api/routes/folders.route";
import { filesRouter } from "./api/routes/files.route";
import { checkDBConnection, syncDB } from "./api/models";
import { usersRouter } from "./api/routes/users.route";

const app = express();
const PORT = 8000;
dotenv.config();

// Global middlewares
// Allows the server receive json from requests
app.use(express.json());
// Allows Cross Origin resource sharing
app.use(cors());
// Improves logging
app.use(morgan("dev"));
// Compresses API response
app.use(compression());
//Hides the server's technology
app.use(helmet());

app.get("/api/v1", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello there, welcome to the safe-space REST API",
  });
});

// Application routes
app.use("/api/v1/folders", foldersRouter);
app.use("api/v1/files", filesRouter);
app.use("/api/v1/users", usersRouter);

checkDBConnection();
syncDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
