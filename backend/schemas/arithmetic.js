const Joi = require("joi")

const arithmeticSchema = Joi.object({
    number1: Joi.number().required(),
    number2: Joi.number().required()
})

module.exports = {
    arithmeticSchema
}