import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';
import { PanierModel } from 'src/app/_models/panier-model';
import { ProductModel } from 'src/app/_models/product-model';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit, OnChanges {
  @Input() product = new ProductModel();

  @Input() isVisible = false;

  @Output() addPannier = new EventEmitter<number>();

  panier = new PanierModel();
  price = 0;
  quantity = 0;
  productName = "";
  category = "";
  alertMessage = "";
  counter = 0;
  TTC = 0;
  HT = 0;
  taxe = 0;
  isImport = false;

  error = false;


  constructor(private cartService: CartService) {

  }
  ngOnChanges(): void {
    this.alertMessage = "";
    this.price = this.product.price
    this.quantity = this.product.quantity;
    this.productName = this.product.productName;
    this.category = this.product.category;
    this.isImport = this.product.isImported;
    this.counter = 0;
    this.calculProductPrice();
  }

  ngOnInit(): void {
    this.price = this.product.price
    this.quantity = this.product.quantity;
    this.productName = this.product.productName;
    this.category = this.product.category;
    this.counter = 0;
    this.calculProductPrice();

  }

  incrimentProduct() {
    this.error = false;
    if (this.quantity>0) {
      this.counter = this.counter + 1;
      this.quantity = this.quantity - 1;
      this.alertMessage = " You have get " + this.counter ;
    } else {
      this.error = true;
      this.alertMessage = "Sorry no more of this product is available"
    }
    this.calculProductPrice();
  }

  decrimentProduct() {
    this.error = false;
    if (this.counter > 0) {
      this.error = false;
      this.counter = this.counter - 1;
      this.quantity = this.quantity + 1;
      this.alertMessage = " You have " + this.counter + " product(s)";
    }
    this.calculProductPrice();
  }

  addArticleToCart() {
    if (this.counter > 0) {
      this.panier.productName = this.productName;
      this.panier.category = this.category;
      this.panier.id = this.product.id;
      this.panier.quantity = this.counter;
      this.panier.HT = this.HT;
      this.panier.taxes = this.taxe;
      this.panier.TTC = this.TTC;
      this.panier.prixTotal = (this.counter * this.TTC);

      this.cartService.addNewPannier(this.product.id, this.panier);
      this.error = true;
      this.getelementTopanier();

    } else {
      this.error = true;
      this.alertMessage = "No product has been detected "
    }
  }

  calculProductPrice():void {
    if (this.category != "Food" && this.category != "Medecine") {
      if (this.category == "Books" && !this.isImport) {
        this.taxe = this.calculPercntReduction(this.price, 10)
      } else if (this.category == "Books" && this.isImport) {
        this.taxe = this.calculPercntReduction(this.price, 10) +
          this.calculPercntReduction(this.price, 5)
      } else if (!this.isImport) {
        this.taxe = this.calculPercntReduction(this.price, 20)
      } else {
        this.taxe = this.calculPercntReduction(this.price, 20) +
          this.calculPercntReduction(this.price, 5)
      }
    }
    this.taxe = this.roundNumber(this.taxe);
    this.ttcPrice(this.taxe);
  }

  ttcPrice(taxe: number):void {
    this.TTC = this.price + this.counter * (this.price * taxe / 100);
    this.HT = this.price;
  }

  calculPercntReduction(uniprice: number, percnt: number):number {
    return (uniprice * percnt) / 100
  }

  roundNumber(num: number): number {
    if (num < 1) {
      num = Math.round(num);
    }else{
      num = Math.round(num*100)/100;
    }
    return num;
  }

  // return output response for actualize datas of parent component
  getelementTopanier():void {
    this.addPannier.emit(this.quantity);
  }

}
