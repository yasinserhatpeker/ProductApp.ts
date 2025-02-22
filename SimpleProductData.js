"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleProductData = void 0;
var Product_1 = require("./Product");
var SimpleProductData = /** @class */ (function () {
    function SimpleProductData() {
        this.products = new Array(new Product_1.Product(1, "Iphone 16 Pro Max", "Telefon", 90999), new Product_1.Product(2, "Iphone 15 Pro Max", "Telefon", 85999), new Product_1.Product(3, "Iphone 14 Pro Max", "Telefon", 75999), new Product_1.Product(4, "Iphone 13 Pro Max", "Telefon", 69999));
    }
    SimpleProductData.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleProductData;
}());
exports.SimpleProductData = SimpleProductData;
