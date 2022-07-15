"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../../database/db"));
const pagination_1 = __importDefault(require("../../functions/pagination"));
const actionsRouter = express_1.default.Router();
actionsRouter.post("/find-product", (req, res) => {
    const { product_name } = req.body;
    const { page } = req.query;
    console.log(product_name);
    if (product_name.length == 0 || product_name == null) {
        res.redirect("/products");
    }
    else {
        //La documentación recomienda emplear placeholders en los query para prevenir inyecciones SQL  
        db_1.default.query(`SELECT * FROM product WHERE name LIKE concat('%',?,'%')`, [product_name], (err, rows) => {
            if (!err) {
                const paginatedData = (0, pagination_1.default)(rows, Number.parseInt(page));
                console.log(paginatedData);
                res.send(paginatedData);
            }
            else {
                res.send(null);
            }
        });
    }
});
actionsRouter.post("/filter-product", (req, res) => {
    const { category_id } = req.body;
    const { page } = req.query;
    console.log(req.query);
    db_1.default.query("SELECT * FROM product WHERE category = ?", [category_id], (err, rows) => {
        if (!err) {
            const paginatedData = (0, pagination_1.default)(rows, Number.parseInt(page));
            console.log(rows);
            res.send(paginatedData);
        }
        else {
            res.send(null);
        }
    });
});
exports.default = actionsRouter;
