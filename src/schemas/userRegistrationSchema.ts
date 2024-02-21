import Joi, { CustomHelpers } from "joi";
import { NewUserTypes } from "../types/newUserTypes";
import { registrationTypes } from "../types/registrationTypes";
import RegistrationModel from "../models/registrationModel";

const ifUserExist =
  (user: registrationTypes | null) =>
  (value: string, helpers: CustomHelpers) => {
    if (user) {
      return helpers.error("email already exist!");
    }
    return value;
  };

const userRegistrationSchema = async (data: NewUserTypes) => {
  const user = await RegistrationModel.findOne({ email: data.email });

  return Joi.object<NewUserTypes>({
    email: Joi.string().email().custom(ifUserExist(user)).required(),
    password: Joi.string().min(8).max(15).required(),
    repeatPassword: Joi.string().min(8).max(15).required(),
  });
};

export default userRegistrationSchema;
