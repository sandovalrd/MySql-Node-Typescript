"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const heroes_1 = __importDefault(require("./routes/heroes"));
// import Mysql from "./mysql/mysql";
const server = server_1.default.init(3000);
server.app.use(heroes_1.default);
// Mysql.instance;
server.start();
