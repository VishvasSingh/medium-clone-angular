import { Component } from '@angular/core';
import { SalesByMonthComponent } from '../sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { TopThreeProductsComponent } from '../top-three-products/top-three-products.component';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    SalesByMonthComponent,
    TopThreeProductsComponent,
    SalesByCategoryComponent,
    TopWidgetsComponent,
  ],
})
export class MainComponent {}
