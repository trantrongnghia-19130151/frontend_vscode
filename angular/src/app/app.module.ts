import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderEx2Component } from './exercise2/header-ex2/header-ex2.component';
import { CarouselComponent } from './exercise2/carousel/carousel.component';
import { ProductComponent } from './exercise2/product/product.component';
import { FooterEx2Component } from './exercise2/footer-ex2/footer-ex2.component';



@NgModule({
  declarations: [ // nơi khai báo các component đc quản lí bởi module này
    AppComponent,
   // HelloComponent,
   HeaderEx2Component,
   CarouselComponent,
   ProductComponent,
   FooterEx2Component,
   
    
  ],
  imports: [ // Nơi khai báo các module khác dc sự dụng trong module này
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Nơi khai báo các service cần dùng cho module này
  bootstrap: [AppComponent]
})
export class AppModule { }
