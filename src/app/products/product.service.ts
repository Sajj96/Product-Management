import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IProduct } from './product';
 
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private  productUrl = 'api/products';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))), 
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.id === id))
          );
    }

    createProduct(product: IProduct): Observable<IProduct> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        product.id = null;
        return this.http.post<IProduct>(this.productUrl, product, { headers })
          .pipe(
            tap(data => console.log('createProduct: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
      }
    
      deleteProduct(id: number): Observable<{}> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.productUrl}/${id}`;
        return this.http.delete<IProduct>(url, { headers })
          .pipe(
            tap(data => console.log('deleteProduct: ' + id)),
            catchError(this.handleError)
          );
      }
    
      updateProduct(product: IProduct): Observable<IProduct> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.productUrl}/${product.id}`;
        return this.http.put<IProduct>(url, product, { headers })
          .pipe(
            tap(() => console.log('updateProduct: ' + product.id)),
            // Return the product on an update
            map(() => product),
            catchError(this.handleError)
          );
      }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    private initializeProduct(): IProduct {
        // Return an initialized object
        return {
          id: 0,
          productName: null,
          productCode: null,
          tags: [''],
          releaseDate: null,
          price: null,
          description: null,
          starRating: null,
          imageUrl: null
        };
      }
}