import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)
export class loggingService{
    public title:string="defualt"
    public log(message:string){
        console.log(message);

    }
}