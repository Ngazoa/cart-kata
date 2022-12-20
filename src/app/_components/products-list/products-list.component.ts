import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { defaultIfEmpty, Observable, Subscription } from 'rxjs';
import { PanierModel } from 'src/app/_models/panier-model';
import { ProductModel } from 'src/app/_models/product-model';
import { CartService } from 'src/app/_services/cart.service';
import { ProductService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products!: ProductModel[];
  query: String = "";
  article!: PanierModel;
  productchoosed!: ProductModel;
  idArticle = 1;
  isVisible = false;
  productInCart = 0;
  category = "";
  pageTitle=" Product list";

  alertMessage = "Waiting for new product in cart...";

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  // for manage components Datas lifeCycle
  productsubscription = new Subscription;



  constructor(private cartService: CartService,
    private productService: ProductService) {

  }
  ngOnDestroy(): void {
    // clear productsubscription datas
    this.productsubscription.unsubscribe();
  }

  ngOnInit() {
    this.getProductsList();
    this.getCartDetails(0)
  }

  getProductsList() {
    this.productsubscription = this.productService.getProductList().subscribe(
      (response) => {
        this.products = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

  }


  onTableDataChange(event: any) {
    this.page = event;
    this.getProductsList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getProductsList();
  }

  articleChoosed(panier: ProductModel) {
    this.isVisible = true;
    this.productchoosed = new ProductModel;
    this.productchoosed = panier;

  }
  getCartDetails(productCount: number):void {

    this.productInCart = this.cartService.getPanierSizeElements();
    this.isVisible = false;
    if (productCount > 0) {
      let i = 0;
      for (let p of this.products) {
        // search datas to modify and update it in the active Json file
        if (this.products[i].id == this.productchoosed.id) {
          this.products[i].quantity = productCount;
        }
        i = i + 1;
      }

    }
    this.alertMessage = "You have " + this.productInCart + " product(s) in the Cart";

  }

}
