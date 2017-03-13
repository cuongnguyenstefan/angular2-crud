import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export	class	UserService	{
    private _baseUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){}

    getUsers(){
        return this._http.get(this._baseUrl)
            .map(res => res.json());
    }

    postUser(user) {
        return this._http.post(this._baseUrl, JSON.stringify(user)).map(r => r.json);
    }

}