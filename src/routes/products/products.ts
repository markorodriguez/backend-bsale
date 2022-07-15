import express, { Request, Response } from 'express'
import db from "../../database/db"
import IProduct from "../../interfaces/IProduct"
import pagination from '../../functions/pagination'

const productosRouter = express.Router()

productosRouter.get("/", (req: Request, res: Response) => {
  const { page }:any = req.query

  db.query("SELECT * FROM product", (err: any, rows: Array<IProduct>) => {
    
    const paginatedProducts = pagination(rows, Number.parseInt(page))
    
    res.json(paginatedProducts)
 
  });
})


export default productosRouter;