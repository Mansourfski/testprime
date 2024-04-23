import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import PrimeNG modules
import {ProductService} from "./service/productservice";
import {TableModule} from "primeng/table";
import {TableReorderDemo} from "./table-reorder-demo/table-reorder-demo.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{path: '', component: TableReorderDemo}]),
    TableModule
  ],
  declarations: [TableReorderDemo],
  bootstrap: [TableReorderDemo],
  providers: [ProductService]
})

export class AppModule {
}
