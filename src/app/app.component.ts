import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product'
// import { products as data } from './data/products'
import { ProductsService } from './services/products.service';
import { tap, Observable } from 'rxjs'
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular app';
  // products: IProduct[] = data
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )

    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
