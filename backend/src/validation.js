import Joi from "joi";

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(1).max(30).required(),
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

export { registerValidation, loginValidation };
