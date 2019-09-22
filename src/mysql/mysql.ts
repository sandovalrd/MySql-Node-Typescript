import mysql = require("mysql");

export default class Mysql {
  conectado: boolean;
  private static instancia: Mysql;
  connection: mysql.Connection;

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

  private conectar() {
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

  public static get instance() {
    if (!this.instancia) {
      this.instancia = new this();
    }
    return this.instancia;
  }

  static ejecutarQuery(query: string, callback: Function) {
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
