import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductRowComponent } from './product/product-row/product-row.component';
import { PriceDisplayComponent } from './product/price-display/price-display.component';
import { ProductDepartmentComponent } from './product/product-department/product-department.component';
import { ProductImageComponent } from './product/product-image/product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
