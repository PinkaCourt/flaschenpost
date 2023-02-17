import { Pipe, PipeTransform } from '@angular/core';
import { IFlatProduct } from '../models/product';

@Pipe({
  name: 'sorterProducts',
})
export class SorterProductsPipe implements PipeTransform {
  transform(products: IFlatProduct[], asc: boolean): IFlatProduct[] {
    return products.slice().sort((a: IFlatProduct, b: IFlatProduct) => {
      let left = a;
      let right = b;

      if (!asc) {
        left = b;
        right = a;
      }

      return left.price - right.price;
    });
  }
}
