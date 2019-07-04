import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
    public API = "https://aymevet.com/api/clientes/";
    constructor(private http: HttpClient, private auth: AuthService) { }
    
    public clients(){
        let user = this.auth.auth();
        return this.http.get(this.API+user.id);
    }
}
