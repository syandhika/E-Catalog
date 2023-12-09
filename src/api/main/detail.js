import HTTPMethods from "../HTTPMethods";
import mainCaller from "./mainCaller";

export class DetailApi{
    static getDetail(){
        return mainCaller(`/v1/detail`,HTTPMethods.GET)
    }
}