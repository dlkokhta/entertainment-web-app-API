import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const verifyToken = (req: Request, res: Response) => {
  const { authorization } = req.headers;
};

export default verifyToken;
