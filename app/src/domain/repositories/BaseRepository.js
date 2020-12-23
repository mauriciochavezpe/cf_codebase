class BaseRepository {
    constructor(config_db) {
        this.schema = config_db.schema;
        this.table = config_db.table;
    }
    async getAll() {
        // USUARIOS
        return  `SELECT * FROM "${this.schema}"."${this.table}";`
    }
    async create(trama) {
        return `INSERT INTO "${this.schema}"."${this.table}"(ID,NOMBRE,APELLIDOS,EMAIL,FECHA) VALUES (USUARIOINCREMENT.nextval,'${trama["nombre"]}','${trama["apellidos"]}','${trama["email"]}','${trama["fecha"]}');`
    }
    async update(trama, id) {
        return `UPDATE  "${this.schema}"."${this.table}" SET NOMBRE='${trama["nombre"]}',APELLIDOS='${trama["apellidos"]}',EMAIL='${trama["email"]}',FECHA='${trama["fecha"]}' WHERE ID=${id}`;

    }
    async delete(xid) {
        return `DELETE FROM "${this.schema}"."${this.table}" WHERE ID=${xid}`;
    }


}
module.exports = BaseRepository;