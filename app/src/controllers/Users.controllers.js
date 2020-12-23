const Model = require('../application/User.service');
const joi = require('joi');
const moment = require('moment');
const user = new Model("User");

const getUsers = async function (req, res) {
    try {
        var r = await user.getAll();
        res.status(r.status).send(r);
    } catch (error) {
        console.log("$error", error.message);
        res.status(error.status).send(error);

    }
}
const postUser = async function (req, res) {

    try {
        let id = req.body.id;
        let nombre = req.body.nombre;
        let apellidos = req.body.apellidos;
        let email = req.body.email;
        let fecha = req.body.fecha ? moment(req.body.fecha).format() : '';
        let body = {
            id,
            nombre,
            apellidos,
            email,
            fecha
        }
        
        // console.log(body);

        // aquí usariamos la libreria joi para validar la entrada desde el front!
        
        var r = await user.create(body)
        res.status(r.status).send(r);
       
        } catch (error) {
            console.log("$error", error);
            res.status(error.status).send(error);
        }

      
}
const deleteUser = async function (req, res) {
    id = req.params.id;
    try {
        let usuario = await user.delete(id);
        
        if (usuario == 0) {
            return res.status(412).json({ message: "No hay ningun registro con esa información. " })
        }
        res.json({ message: "Se elimino exitosamente. " })
    } catch (error) {
        res.status(412).json({ message: "Error mientras se eliminaba " + error.message })
    }
}
const updateUser = async function (req, res) {
    let id = req.params.id;
    
        let nombre = req.body.nombre;
        let apellidos = req.body.apellidos;
        let email = req.body.email;
        let fecha = req.body.fecha ? req.body.fecha : '';
        
        let body = {
            nombre,
            apellidos,
            email,
            fecha
        }

     try {
        let usuario = await user.update(body, id)
        // console.log("esto ",usuario);

        if (usuario.payload > 0) {
            return res.json({ message: "Se actualizo exitosamente" })
        }
        return res.status(412).json({ message: (typeof usuario == "object") ? "No hay dato" : usuario })
    } catch (error) {
        res.status(412).json({ message: "Error mientras se actualiza " + error })
    }
}
module.exports = {
    getUsers,
    postUser,
    deleteUser,
    updateUser
};