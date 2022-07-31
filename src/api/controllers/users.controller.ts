import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { Op } from "sequelize";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: ["firstName", "lastName", "email", "nickName"],
    });
    if (!users) {
      return res.status(404).json({
        message: "No users found",
      });
    }
    res.status(200).json({
      message: "Users found",
      users,
    });
  } catch (error) {}
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created",
      user: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to create user",
      error: error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    // Find user by email
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
      attributes: [
        "id",
        "firstName",
        "lastName",
        "nickName",
        "email",
        "password",
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.toJSON().password
    );
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Email or password may be incorrect" });
    }

    // Create Access and Refresh tokens
    const accessToken = jwt.sign(
      user.toJSON(),
      process.env.ACCESS_TOKEN_SECRET as string
    );
    const refreshToken = jwt.sign(
      user.toJSON(),
      process.env.REFRESH_TOKEN_SECRET as string
    );

    res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
    });
  } catch (error) {}
};
