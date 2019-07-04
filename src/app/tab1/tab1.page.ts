import { Component } from '@angular/core';
import { ProductsService} from '../services/products.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public products:any = [];
    constructor(private productsService: ProductsService) {this.showProducts();}

    public showProducts(){
        this.productsService.products().subscribe(
            (data) => {
                this.products = data;
            }, (error) => {
                alert(error);
            }
        );
    };

}
