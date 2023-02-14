import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';
import { converter } from '../common/utils';

const lIMIT = 2;

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], filter: boolean): IProduct[] {
    if (!filter) {
      return products;
    }
    return products.filter(
      (product) => converter(product.articles[0].pricePerUnitText) > lIMIT
    );
  }
}
