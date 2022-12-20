import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PanierModel } from 'src/app/_models/panier-model';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ArticleList = new Map<number, PanierModel>();
  taxesTotal = 0;
  TTcTotal = 0;
  grandTotal = 0;
  productInCart = 0;
  pageTitle = "Cart product(s)";

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.loadCardArticles();
  }

  removeArticle(articeId: number, TTC: number, taxes: number, gTotal: number) {
    this.cartService.removeArticleOnPanier(articeId);
    this.subsTitueSumaryTotal(TTC, taxes, gTotal);
    this.loadCardArticles();
  }

  loadCardArticles() {
    this.productInCart = this.cartService.getPanierSizeElements();
    this.ArticleList = this.cartService.getPanierList();
    this.TTcTotal = 0;
    this.taxesTotal = 0;
    this.grandTotal = 0;
    for (let art of this.ArticleList.values()) {
      this.TTcTotal = this.TTcTotal + art.TTC;
      this.taxesTotal = this.taxesTotal + art.taxes;
      this.grandTotal = this.grandTotal + art.prixTotal;
    }
    
  }

  subsTitueSumaryTotal(ttc: number, taxe: number, gTotal: number) {
    this.TTcTotal = this.TTcTotal - ttc;
    this.taxesTotal = this.taxesTotal - taxe;
    this.grandTotal = this.grandTotal - gTotal;
  }
}
