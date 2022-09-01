import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MainComponent } from './components/template/main/main.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { HomeComponent } from './components/template/main/home/home.component';
import { ProductCrudComponent } from './components/template/main/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/template/main/product-create/product-create.component';
import { SnapBarComponent } from './components/template/main/snap-bar/snap-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ProductReadComponent } from './components/template/main/product-read/product-read.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/template/main/product-update/product-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    SnapBarComponent,
    ProductReadComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
