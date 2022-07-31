import { Request, Response } from "express";

export const getAllFolders = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Folders retrived",
    folders: [
      {
        id: "Folder1",
        name: "New start",
      },
    ],
  });
};
