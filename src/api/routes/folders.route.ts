import { Router } from "express";
import { getAllFolders } from "../controllers/folders.controller";
import { authRequired } from "../middlewares/authRequired";

const router = Router();

router.use(authRequired);

router.get("/", getAllFolders);

export { router as foldersRouter };
