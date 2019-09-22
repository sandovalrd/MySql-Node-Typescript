import express = require("express"); //  npm install @types/express --save
import path = require("path");

export default class Server {
  app: express.Application;
  port: number;

  constructor(puerto: number) {
    this.port = puerto;
    this.app = express();
  }

  static init(puerto: number) {
    return new Server(puerto);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando en el puerto ${this.port}`);
    });
    this.publicFolder();
  }

  private publicFolder() {
    const publicFolder = path.resolve(__dirname, "../public");
    this.app.use(express.static(publicFolder));
  }
}
