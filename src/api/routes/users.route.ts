import { Router } from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
} from "../controllers/users.controller";
import { validateData } from "../middlewares/validateData";
import { loginSchema } from "../validators/login.validator";
import { userSchema } from "../validators/user.validator";

const router = Router();

router.get("/", getAllUsers);
router.post("/", validateData(userSchema), createUser);
router.post("/login", validateData(loginSchema), loginUser);

export { router as usersRouter };
