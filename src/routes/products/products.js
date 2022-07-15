"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../../database/db"));
const pagination_1 = __importDefault(require("../../functions/pagination"));
const productosRouter = express_1.default.Router();
productosRouter.get("/", (req, res) => {
    const { page } = req.query;
    db_1.default.query("SELECT * FROM product", (err, rows) => {
        const paginatedProducts = (0, pagination_1.default)(rows, Number.parseInt(page));
        res.json(paginatedProducts);
    });
});
exports.default = productosRouter;
