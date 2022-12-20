import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './_components/products-list/products-list.component';
import { ProductsDetailsComponent } from './_components/products-details/products-details.component';
import { ProductFilterByNamePipe } from './_pipes/product-filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AroundTaxePipe } from './_pipes/around-taxe.pipe';
import { CartComponent } from './_components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductFilterByNamePipe,
    HeaderComponent,
    FooterComponent,
    AroundTaxePipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
