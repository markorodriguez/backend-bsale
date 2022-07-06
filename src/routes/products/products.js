"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../../database/db"));
const productosRouter = express_1.default.Router();
productosRouter.get("/", (req, res) => {
    db_1.default.query("SELECT * FROM product", (err, rows) => {
        res.send(rows);
    });
});
exports.default = productosRouter;
