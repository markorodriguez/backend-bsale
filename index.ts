import ICategory from "./interfaces/ICategory";
import IProduct from "./interfaces/IProduct";

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})


app.get('/products', (req:any, res:any)=>{
    pool.query('SELECT * FROM product', (err:any, rows:Array<IProduct>)=>{
        res.send(rows)
    })
    
})

app.get('/categories', (req:any, res:any)=>{
    pool.query('SELECT * FROM category', (err:any, rows:Array<ICategory>)=>{
        res.send(rows)
    })
    
})
