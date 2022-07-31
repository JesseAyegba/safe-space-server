import { Router } from "express";
import { getAllFiles } from "../controllers/files.controller";

const router = Router();

router.get("/", getAllFiles);

export { router as filesRouter };
