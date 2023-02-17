import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { SorterProductsPipe } from './pipes/sorter-products.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { FlaterProductsPipe } from './pipes/flater-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SorterProductsPipe,
    FilterProductsPipe,
    FlaterProductsPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
