import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'flaschenpost.de';

  products$: Observable<IProduct[]>;
  sortedByAsc = true;
  detailView = true;
  filter = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAll();
  }
}
