import { Router, Request, Response } from "express";
import Mysql from "../mysql/mysql";
const router = Router();

router.get("/heroes", (req: Request, res: Response) => {
  const query = `Select * from heroes where 1=1`;
  Mysql.ejecutarQuery(query, (err: any, resultado: string[]) => {
    if (err) {
      res.status(401).send(err);
    }
    res.send(resultado);
  });
});

router.get("/heroes/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const query = `Select * from heroes where id=${id}`;
  Mysql.ejecutarQuery(query, (err: any, resultado: string[]) => {
    if (err) {
      res.status(401).send(err);
    }
    res.send(resultado);
  });
});

export default router;
