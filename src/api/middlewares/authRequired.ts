import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authRequired = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({
      message: "Please enter a token",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
