const Model = require('../domain/repositories/');
const debugApp = require('../config/debug');
const connection = require('../config/connection');
class BaseService {
    constructor(repo) {
        // Selecionamos un modelo(tabla); -- Model["User"]
        this._baseService = Model[repo];  
    }

    // function return all rows
    async getAll() {
        var sql = await this._baseService.getAll(); //SELECT * FROM TABLE
        return new Promise((resolve, reject) => {
            //console.log("url",this._baseService.getAll());
            connection.exec(sql, function (err, result) {
                if (err) {
                    debugApp(`Error al ejecutar el SQL ${sql}`,'error');
                    reject({
                        status: 400,
                        message: "Error al procesar la solicitud " + err.message
                    });
                }

                resolve({
                    status: 200,
                    payload:result
                })

            })

        })
    }
    async create(trama) {
        var sql = await this._baseService.create(trama);
        return new Promise((resolve, reject) => {

            connection.exec(sql, (err, result) => {
                if (err) {
                    debugApp(`Error al ejecutar el SQL ${sql}`,'error');
                    reject({
                        error: "Error al insertar datos " + err.message,
                        status: 400
                    })
                }
                // connection.commit();
                result = result == 1 ? trama : trama;
                // console.log("resultado al crear",result);
                resolve({ status: 200, payload: result });
            })
        })
       
    }
    async update(trama, xid) {
        var sql = await this._baseService.update(trama, xid);
        console.log(sql);
        return new Promise((resolve, reject) => {
            connection.exec(sql, (err, result) => {
                if (err) {
                    reject({
                        status: 400,
                        message: "Error " + err.message
                    })
                }
                resolve({
                    status: 200,
                    payload: result
                })
            })
        })

    }
    async delete(xid) {

        var sql = await this._baseService.delete(xid);
        console.log(sql);
        return new Promise((resolve, reject) => {
            connection.exec(sql, (err, result) => {
                if (err) {
                    reject({
                        status: 400,
                        message: "Error " + err.message
                    })
                }
                resolve({
                    status: 200,
                    payload: result
                })
            })
        })
    }
    

}
module.exports = BaseService;