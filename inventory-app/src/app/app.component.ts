import { Component } from '@angular/core';
import { Product } from './product/model/product.model';
@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products: Product[];
}
