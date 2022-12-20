import { TestBed } from '@angular/core/testing';
import { PanierModel } from '../_models/panier-model';

import { CartService } from './cart.service';

describe('PanierService', () => {
  let ArticleList = new Map<number, PanierModel>();

  let service: CartService;
  let newCart: PanierModel = {
    id: 0,
    productName: "Fake article",
    taxes: 0,
    prixUnitaire: 0,
    TTC: 0,
    prixTotal: 0,
    HT: 0,
    price: 0,
    category: "",
    isImported: true,
    quantity: 102
  }
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add New  article on Cart', () => {
    service.addNewPannier(1, newCart);
    let lg = service.getPanierSizeElements();
    expect(lg).toBe(1);
  });

  it('should Remove  article on Cart', () => {
    service.addNewPannier(1, newCart);
    service.removeArticleOnPanier(1);
    let lg = service.getPanierSizeElements();
    expect(lg).toBe(0);
  });

  it('should Get article list on Cart', () => {
    service.deleteAllCartdatas();
    service.addNewPannier(1, newCart);
    ArticleList.set(1, newCart);
    let lg = service.getPanierList();
    expect(lg).toEqual(ArticleList)
  });
});
