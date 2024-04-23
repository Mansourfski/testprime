import { Component, OnInit } from '@angular/core';
import {Product} from "../domain/product";
import {ProductService} from "../service/productservice";

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'table-reorder-demo',
  templateUrl: './table-reorder-demo.component.html',
  styleUrls: ['./table-reorder-demo.component.css']
})
export class TableReorderDemo implements OnInit{
  products!: Product[];

  cols!: Column[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((data) => (this.products = data));

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }
  onRowReorder(event: any){
    console.log(event); //{dragIndex: 1, dropIndex: 2}
  }
}
