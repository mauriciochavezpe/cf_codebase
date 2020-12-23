const Task = require('../application/Task.service');
const task = new Task("Task")
const getTasks = async function (req, res) {

    var tarea = await task.getAll();
    res.json({ payload: tarea })
}
const postTask = async function (req, res) {
    try {
        let titulo = req.body.titulo;
        let descripcion = req.body.descripcion;
        let UserId = req.body.UserId;
        let body = {
            titulo,
            descripcion,
            UserId
        }

        let t;
        t = await task.add(body);
        res.json({ payload: t })

    } catch (error) {
        res.status(412).json({ message: "Error" + error.message })
    }
}
const deleteTask = async function (req, res) {
    id = req.params.id;
    try {
        let usuario = await task.delete(id)
        if (usuario == 0) {
            return res.status(412).json({ message: "No hay ningun registro con esa información " })
        }
        return res.json({ message: "Se elimino exitosamente" })
    } catch (error) {
        return res.status(412).json({ message: "Error mientras se eliminaba " + error.message })
    }
}
const updateTask = async function (req, res) {
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    // let email = req.body.email;
    let id = +req.params.id;

    try {

        let usuario = await task.update({ titulo, descripcion }, id)
        if (usuario[0] == 0) {
            return res.status(412).json({ message: "No hay ningun registro con esa información " })
        }
        res.json({ message: "Se actualizo exitosamente" })
    } catch (error) {
        res.status(412).json({ messagex: "Error mientras se eliminaba " + error.message })
    }
}
module.exports = {
    getTasks,
    postTask,
    deleteTask,
    updateTask
};