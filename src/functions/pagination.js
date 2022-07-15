"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination = (value, page) => {
    const pagePagination = page;
    const limitPagination = 8;
    //Definir los límites para la paginación
    const startIndex = (pagePagination - 1) * limitPagination;
    const endIndex = pagePagination * limitPagination;
    const results = {};
    if (endIndex < value.length) {
        results.next = {
            page: page + 1,
            limit: limitPagination
        };
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limitPagination
        };
    }
    //Número de páginas si no hay resultados
    if (value.length == 0 || value.length == undefined) {
        results.numberPages = 0;
    }
    else {
        results.numberPages = value.length < limitPagination ? 1 : Math.round(value.length / limitPagination);
    }
    //Paginación
    results.results = value.slice(startIndex, endIndex);
    return ({ results });
};
exports.default = pagination;
