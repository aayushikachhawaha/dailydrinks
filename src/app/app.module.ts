import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCreateComponent } from './order-crud/order-create/order-create.component';
import { OrderListComponent } from './order-crud/order-list/order-list.component';
import { OrderEditComponent } from './order-crud/order-edit/order-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    OrderListComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
