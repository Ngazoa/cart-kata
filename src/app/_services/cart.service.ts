import { Injectable } from '@angular/core';
import { PanierModel } from '../_models/panier-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  articleList = new Map<number, PanierModel>();

  constructor() { }

  // there we are additing new article on panier
  addNewPannier(id: number, panierModel: PanierModel) {
    return this.articleList.set(id, panierModel);
  }

  getPanierSizeElements(): number {
    let elementnumber = 0;
    for (let article of this.articleList.keys()) {
      elementnumber++;
    }
    return elementnumber;
  }

  getPanierList() {
    return this.articleList;
  }
  removeArticleOnPanier(id: number) {
    return this.articleList.delete(id)
  }
   deleteAllCartdatas(){
    return this.articleList.clear;
   }

}
