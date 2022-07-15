import express, { Request, Response } from "express";
import db from "../../database/db";
import IProduct from "../../interfaces/IProduct";
import pagination from "../../functions/pagination";

const actionsRouter = express.Router();

actionsRouter.post("/find-product", (req: Request, res: Response) => {
  const { product_name } = req.body;
  const { page }:any = req.query

  console.log(product_name)

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
            const paginatedData = pagination(rows, Number.parseInt(page) )
            console.log(paginatedData)
            res.send(paginatedData);
          } else {
            res.redirect("/products?page=1");
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
  const { page }:any = req.query
  
  console.log(req.query)

  db.query(
    "SELECT * FROM product WHERE category = ?",
    [category_id],
    (err: any, rows: Array<IProduct>) => {
      if (!err) {
        if (rows.length > 0){
          const paginatedData = pagination(rows, Number.parseInt(page))
          console.log(rows)
          res.send(paginatedData)
        } else {
          res.redirect("/products?page=1");
        }
      } else {
        res.send(null);
      }
    }
  );
});

export default actionsRouter;
