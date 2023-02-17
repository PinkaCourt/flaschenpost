import { Pipe, PipeTransform } from '@angular/core';
import { IProduct, IFlatProduct } from '../models/product';

@Pipe({
  name: 'flaterProducts',
})
export class FlaterProductsPipe implements PipeTransform {
  transform(products: IProduct[]): IFlatProduct[] {
    const flatProducts: IFlatProduct[] = [];

    products.forEach((product) => {
      const { articles, brandName, name, descriptionText } = product;

      articles.forEach((elem) => {
        flatProducts.push({
          ...elem,
          brandName,
          name,
          descriptionText,
        });
      });
    });

    return flatProducts;
  }
}
