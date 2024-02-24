import RegistrationModel from "../models/registrationModel.js";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userRegistrationSchema from "../schemas/userRegistrationSchema.js";

export const postRegistrationController = async (
  req: Request,
  res: Response
) => {
  const { body } = req;
  

  console.log("body.repeatPassword", body.repeatPassword);

  if (body.password !== body.repeatPassword) {
    return res.status(400).json({ error: "Password do not match" });
  }

  try {
    const validator = await userRegistrationSchema(body);

    const { value, error } = validator.validate(body);
    console.log("value", value);
    console.log("value", value);

    if (error) {
      return res.status(401).json(error.details);
    }

    const { email, password } = value;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new RegistrationModel({
      email,
      password: hashedPassword,
    });
    newUser.save();
    return res.status(201).json("user registered succesfully");
  } catch (error) {
    return res.status(401).json(error);
  }
};
