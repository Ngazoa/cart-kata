import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { ProductModel } from '../_models/product-model';
import { ProductService } from './product.service';


describe('ProductService', () => {
  let service: ProductService;
  let httpSpy: Spy<HttpClient>;


  let productList: ProductModel[] = [
    {
      id: 0,
      productName: "Fake article",
      price: 0,
      category: "",
      isImported: true,
      quantity: 102
    },
    {
      id: 0,
      productName: "Fake article",
      price: 750,
      category: "55r",
      isImported: true,
      quantity: 102
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });

    service = TestBed.inject(ProductService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should return an expected list of products', (done: DoneFn) => {
    httpSpy.get.and.nextWith(productList);

    service.getProductList().subscribe(
      customers => {
        expect(customers).toHaveSize(productList.length);
        done();
      },
      done.fail
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

});


