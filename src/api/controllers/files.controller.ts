import { Request, Response } from "express";

export const getAllFiles = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Files retrived",
    files: [
      {
        id: "1",
        name: "snippets",
      },
    ],
  });
};
