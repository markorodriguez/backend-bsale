import express, { Request, Response } from "express";
import db from "../../database/db";
import IProduct from "../../interfaces/IProduct";

const actionsRouter = express.Router();

actionsRouter.post("/find-product", (req: Request, res: Response) => {
  const { product_name } = req.body;

  if (product_name.length == 0 || product_name == null) {
    res.redirect("/products");
  } else {
    //La documentación recomienda emplear placeholders en los query para prevenir inyecciones SQL  
    db.query(
      `SELECT * FROM product WHERE name LIKE concat('%',?,'%')`,
      [product_name],
      (err: any, rows: Array<IProduct>) => {
        if (!err) {
          if (rows.length > 0) {
            res.send(rows);
          } else {
            res.redirect("/products");
          }
        } else {
          res.send(null);
        }
      }
    );
  }
});

actionsRouter.post("/filter-product", (req: any, res: any) => {
  const { category_id } = req.body;

  db.query(
    "SELECT * FROM product WHERE category = ?",
    [category_id],
    (err: any, rows: Array<IProduct>) => {
      if (!err) {
        if (rows.length > 0) res.send(rows);
        else res.redirect("/products");
      } else {
        res.send(null);
      }
    }
  );
});

export default actionsRouter;
