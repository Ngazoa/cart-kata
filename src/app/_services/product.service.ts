import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ProductModel } from '../_models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Setting request headers to JSON
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  httpOptions = {
    headers: this.headers
  };
  private JsonFileUrl = "assets/datas/products.json";

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public getProductList(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.JsonFileUrl, this.httpOptions)
      .pipe(
        tap(data => {
          // debug error here
          console.error(data);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    return throwError(() => new error(error));
  }


}
