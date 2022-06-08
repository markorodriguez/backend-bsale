import ICategory from "./interfaces/ICategory";
import IProduct from "./interfaces/IProduct";

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: "bsale_test",
  password: "bsale_test",
  database: "bsale_test",
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/products", (req: any, res: any) => {
  pool.query("SELECT * FROM product", (err: any, rows: Array<IProduct>) => {
    res.send(rows);
  });
});

app.get("/categories", (req: any, res: any) => {
  pool.query("SELECT * FROM category", (err: any, rows: Array<ICategory>) => {
    res.send(rows);
  });
});

app.post("/find-product", (req: any, res: any) => {
  const { product_name } = req.body;

  if (product_name.length == 0 || product_name == null) {
    res.redirect("/products");
  } else {
    pool.query(
      `SELECT * FROM product WHERE name LIKE = ?`, [product_name],
      (err: any, rows: Array<IProduct>) => {
        if (!err) {
          if(rows.length >0) res.send(rows);
          else res.redirect("/products");
        } else {
          res.redirect("/products");
        }
      }
    );
  }
});

app.post("/filter-product", (req: any, res: any) => {
  const { category_id } = req.body;
  pool.query("SELECT * FROM product WHERE category = ?", [category_id], (err: any, rows: Array<IProduct>) =>{
    if(!err){
      if(rows.length >0) res.send(rows);
      else res.redirect("/products");
    }else{
      res.redirect("/products");
    }
  })
})
