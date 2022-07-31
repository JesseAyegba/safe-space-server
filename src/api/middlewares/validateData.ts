import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "yup";

export const validateData = (schema: ObjectSchema<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, {
        abortEarly: false, // Ensures all errors are returned
      });
      next();
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
        errors: error.errors,
      });
    }
  };
};
