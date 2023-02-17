import { Component, Input } from '@angular/core';
import { IFlatProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: IFlatProduct;
  @Input() detailView: boolean;
}
