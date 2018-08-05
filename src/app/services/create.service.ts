import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class CreateService{

    constructor(private http:Http){}

    signUp(userInfo:{email:string,phone:string,password:string,tfa_enabled:boolean}){
        const userInformation:{} = JSON.stringify(userInfo);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('http://192.168.137.1:3000/v11/users/create',
                          userInformation,{headers:headers}
                          );
    }
    
}