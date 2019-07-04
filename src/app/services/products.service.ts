import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private API = "https://aymevet.com/api/products/";
    constructor(private http: HttpClient, private auth: AuthService) { }

    public products(){
        let user = this.auth.auth();
        return this.http.get(this.API+user.id);
    }
}
