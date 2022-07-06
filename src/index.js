"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = __importDefault(require("./routes/actions/actions"));
const categories_1 = __importDefault(require("./routes/categories/categories"));
const products_1 = __importDefault(require("./routes/products/products"));
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});
app.get("/", (req, res) => {
    res.send("Bsale backend desafío");
});
app.use("/products", products_1.default);
app.use("/categories", categories_1.default);
app.use("/actions", actions_1.default);
