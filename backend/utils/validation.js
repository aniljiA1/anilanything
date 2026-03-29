import Joi from "joi";

export const taskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().allow(""),
});
