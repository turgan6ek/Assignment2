import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Week2Component } from './week2/week2.component';
import { HeaderComponent } from './header/header.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    Week2Component,
    HeaderComponent,
    SearchboxComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
