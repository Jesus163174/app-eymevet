import { Component } from '@angular/core';
import { ClientsService } from '../services/clients.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    public clients:any = [];
    constructor(private clientService: ClientsService) {
        this.showClients();
    }

    public showClients(){
        this.clientService.clients().subscribe(
            (data)=>{
                this.clients = data;
            }, (error)=>{
                alert(error);
            }
        );
    }


}
