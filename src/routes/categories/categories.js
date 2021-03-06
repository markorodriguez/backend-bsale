"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../../database/db"));
const categoriesRouter = express_1.default.Router();
categoriesRouter.get("/", (req, res) => {
    const { page } = req.query;
    db_1.default.query("SELECT * FROM category", (err, rows) => {
        res.send(rows);
    });
});
exports.default = categoriesRouter;
