const Joi = require('joi');

const productSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().min(1).max(1000).required(),
    image: Joi.string().required(),
    details: Joi.string().required()
})

module.exports = {
    productSchema,

}