import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private API = "https://aymevet.com/api/login";
    constructor(private http: HttpClient) { }

    public login(email:string, password:String){
        return this.http.post(this.API,{email:email,password:password},{
            headers:{

            }
        });
    }

    public auth(){
        return JSON.parse(localStorage.getItem('user'));
    }
}
