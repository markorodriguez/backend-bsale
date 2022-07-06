import express, {Request, Response} from 'express'
import db from "../../database/db"
import ICategory from '../../interfaces/ICategory'

const categoriesRouter = express.Router()

categoriesRouter.get("/", (req:Request, res:Response)=>{
    db.query("SELECT * FROM category", (err: any, rows: Array<ICategory>) => {
        res.send(rows);
      });
})

export default categoriesRouter;