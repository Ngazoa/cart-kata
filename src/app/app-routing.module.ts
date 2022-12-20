import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './_components/cart/cart.component';
import { ProductsListComponent } from './_components/products-list/products-list.component';

const routes: Routes = [
  {
    path: "cart-list", component: CartComponent
  },
  {
    path: "", component: ProductsListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
