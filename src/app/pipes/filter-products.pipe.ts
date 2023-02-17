import { Pipe, PipeTransform } from '@angular/core';
import { IFlatProduct } from '../models/product';
import { converter } from '../common/utils';

const lIMIT = 2;

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IFlatProduct[], filter: boolean): IFlatProduct[] {
    if (!filter) {
      return products;
    }
    return products.filter(
      (product) => converter(product.pricePerUnitText) > lIMIT
    );
  }
}
