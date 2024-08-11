import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/pages/home/home.component';
import { CartComponent } from './layouts/pages/cart/cart.component';
import { CategoriesComponent } from './layouts/pages/categories/categories.component';
import { BrandsComponent } from './layouts/pages/brands/brands.component';
import { ProductsComponent } from './layouts/pages/products/products.component';
import { RegisterComponent } from './layouts/pages/register/register.component';
import { LoginComponent } from './layouts/pages/login/login.component';
import { NotfoundComponent } from './layouts/additions/notfound/notfound.component';

export const routes: Routes = [

    { path: "", redirectTo: "home", pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "cart", component: CartComponent },
    { path: "categories", component: CategoriesComponent },
    { path: "brands", component: BrandsComponent },
    { path: "products", component: ProductsComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "**", component: NotfoundComponent },

];
