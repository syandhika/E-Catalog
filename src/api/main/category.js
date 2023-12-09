import HTTPMethods from "../HTTPMethods";
import mainCaller from "./mainCaller";

export class CategoryApi{
    static getCategory(){
        return mainCaller(`/v1/category`,HTTPMethods.GET)
    }
}