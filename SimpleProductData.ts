import { Product } from "./Product";

export class SimpleProductData {

    private products:Array<Product>

    constructor() {

       this.products=new Array<Product>(
            new Product(1,"Iphone 16 Pro Max","Telefon",90999),
            new Product(2,"Iphone 15 Pro Max","Telefon",85999),
            new Product(3,"Iphone 14 Pro Max","Telefon",75999),
            new Product(4,"Iphone 13 Pro Max","Telefon",69999)

        );
    
    }

    getProducts():Product[] {
        return this.products;

    }
}