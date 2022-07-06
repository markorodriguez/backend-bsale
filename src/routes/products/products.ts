import express, {Request, Response} from 'express'
import db from "../../database/db"
import IProduct from "../../interfaces/IProduct"

const productosRouter = express.Router()

productosRouter.get("/", (req:Request, res:Response)=>{
    db.query("SELECT * FROM product", (err: any, rows: Array<IProduct>) => {
        res.send(rows);
      });
})

export default productosRouter;