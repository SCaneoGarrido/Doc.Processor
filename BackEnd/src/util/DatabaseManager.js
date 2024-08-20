const { pool } = require('pg'); // biblioteca para conexion con postgres
const configdb = require('./configDB');


class DataBaseManager {
    constructor() {
        // Variables necesarias para la clase
        this.user_db = configdb.USER_DB;
        this.passwd_db = configdb.PASSWORD_DB;
        this.host_db = configdb.HOST_DB;
        this.port_db = configdb.PORT_DB;
        this.database = configdb.DATABASE;

        // Crear una instancia del pool de conexiones
        this.pool = new Pool({
            user: this.user_db,
            host: this.host_db,
            database: this.database,
            password: this.passwd_db,
            port: this.port_db
        });
    }

    
}
