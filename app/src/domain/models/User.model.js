// model for validate with joi

const debugApp = require('../../config/debug');
const Joi = require("joi");

module.exports = async (req, res, next) => {

    const schema = Joi.object({
        nombre: Joi.string().required(),
        apellidos: Joi.string().max(50).required(),
        email: Joi.string().required().email(),
        fecha: Joi.date().iso().required()
    })
    debugApp(`Esto es el body: ${req.body}`,'error');
    const user = await schema.validate(req.body);

    if (user.error) {
        console.log(user.error.details);
        return res.status(412).json({status:412, message: user.error.details[0].message })
    }
    next();
}
