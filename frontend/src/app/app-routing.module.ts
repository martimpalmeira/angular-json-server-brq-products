import { ProductUpdateComponent } from './components/template/main/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/template/main/home/home.component';
import { ProductCrudComponent } from './components/template/main/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/template/main/product-create/product-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductCrudComponent },
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/update/:id', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
