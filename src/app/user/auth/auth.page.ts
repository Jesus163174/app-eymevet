import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    public credentials = {};
    constructor(private authService:AuthService, private router: Router, private toast: ToastController) { }

    ngOnInit() {
    }

    login(){
        this.authService.login(this.credentials['email'],this.credentials['password']).subscribe(
            (data) => {
                this.confirm(data);
            }, (error) => {
                alert("ups ah ocurrido un errror, peticion login");
            }
        );
    }
    confirm(data){
        if(data['auth'] == true)
            this.save(data['user']);
        else
            alert("Error de auth");
    }
    async save(user){
        localStorage.setItem('user',JSON.stringify(user));
        const toast = await this.toast.create({
            message: 'Logeado Correctamente',
            duration: 3000
          });
          toast.present();
        this.router.navigate(['tabs']);
    }

}
