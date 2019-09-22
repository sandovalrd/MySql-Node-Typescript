"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conectado = false;
        console.log("Clase MySql inicializada!");
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "node_user",
            password: "123456",
            database: "node_db"
        });
        this.conectar();
    }
    conectar() {
        this.connection.connect(err => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log("Base de datos OnLine!");
            return;
        });
    }
    static get instance() {
        if (!this.instancia) {
            this.instancia = new this();
        }
        return this.instancia;
    }
    static ejecutarQuery(query, callback) {
        this.instance.connection.query(query, (err, result, fields) => {
            if (err) {
                return callback({ status: "Error", message: err.message });
            }
            if (result.length === 0) {
                return callback({ status: "Error", message: "No hay registros!" });
            }
            return callback(null, result);
        });
    }
}
exports.default = Mysql;
