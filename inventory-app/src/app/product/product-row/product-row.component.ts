import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
/**
 * @ProductRowComponent: A component for the view of single Product
 */
@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  product: Product;

}
