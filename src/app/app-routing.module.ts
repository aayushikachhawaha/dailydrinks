import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-crud/order-list/order-list.component';
import { OrderCreateComponent } from './order-crud/order-create/order-create.component';
import { OrderEditComponent } from './order-crud/order-edit/order-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'order-list',
    pathMatch: 'full'
  },
  {
    path: 'order-list',
    component: OrderListComponent,
  },
  {
    path: 'order-create',
    component: OrderCreateComponent,
  },
  {
    path: 'order-edit/:id',
    component: OrderEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
