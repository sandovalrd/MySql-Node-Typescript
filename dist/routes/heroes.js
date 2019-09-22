"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get("/heroes", (req, res) => {
    const query = `Select * from heroes where 1=1`;
    mysql_1.default.ejecutarQuery(query, (err, resultado) => {
        if (err) {
            res.status(401).send(err);
        }
        res.send(resultado);
    });
});
router.get("/heroes/:id", (req, res) => {
    const id = req.params.id;
    const query = `Select * from heroes where id=${id}`;
    mysql_1.default.ejecutarQuery(query, (err, resultado) => {
        if (err) {
            res.status(401).send(err);
        }
        res.send(resultado);
    });
});
exports.default = router;
