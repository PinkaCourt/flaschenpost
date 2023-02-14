import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'sorterProducts',
})
export class SorterProductsPipe implements PipeTransform {
  transform(products: IProduct[], asc: boolean): IProduct[] {
    return products.slice().sort((a: IProduct, b: IProduct) => {
      let left = a;
      let right = b;

      if (!asc) {
        left = b;
        right = a;
      }

      return left.articles[0].price - right.articles[0].price;
    });
  }
}
