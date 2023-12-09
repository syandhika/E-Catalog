import HTTPMethods from "../HTTPMethods";
import mainCaller from "./mainCaller";

export class ProductApi{
    static getProduct(){
        return mainCaller(`/v1/product`, HTTPMethods.GET)
    }
}