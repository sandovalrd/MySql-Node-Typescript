"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); //  npm install @types/express --save
const path = require("path");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        });
        this.publicFolder();
    }
    publicFolder() {
        const publicFolder = path.resolve(__dirname, "../public");
        this.app.use(express.static(publicFolder));
    }
}
exports.default = Server;
