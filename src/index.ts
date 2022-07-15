import {Request, Response} from "express"
import actionsRouter from "./routes/actions/actions";
import categoriesRouter from "./routes/categories/categories";
import productosRouter from "./routes/products/products";

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5001, () => {
  console.log("Server is running on port 5001");
});

app.get("/", (req:Request, res:Response)=>{
  res.send("Bsale backend desafío");
})

app.use("/products", productosRouter)
app.use("/categories", categoriesRouter)
app.use("/actions", actionsRouter)
