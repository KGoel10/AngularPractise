import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    // { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    // {
    //     path: 'signup', component: UserComponent,
    //     children: [{ path: '', component: SignUpComponent }]
    // },
    {
        path: 'login', component: UserComponent
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    { path: 'dashboard', component: DashboardComponent}
    
    
];