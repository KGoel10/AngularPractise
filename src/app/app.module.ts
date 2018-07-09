import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {StarComponent} from './shared/star.component';
import { ProductComponent } from './product/product.component';
import { appRoutes } from './routes';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarComponent,
    ProductComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  //   RouterModule.forRoot([
  //     {path: 'home', component: HomeComponent},
  //     {path:'', redirectTo:'/home',pathMatch:'full'},
  //     {path: 'product', component: ProductComponent}
  // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
