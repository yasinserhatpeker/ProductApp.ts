import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService=new ProductService();



let p=new Product();
p.id=5;
p.category="Telefon";
p.name="Iphone 17 Air";
p.price=79999;

_productService.saveProduct(p);
_productService.deleteProduct(5);
let result=_productService.getProducts();
console.log(result);