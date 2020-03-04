import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HomeComponent } from './../../components/home/home.component';
import { RegisterComponent } from './../../components/register/register.component';
import { LogInComponent } from './../../components/log-in/log-in.component';
import { EmpresasComponent } from 'src/app/components/empresas/empresas.component';
import { EmpresaService } from '../controllers/empresa.service';
import { ReservasComponent } from 'src/app/components/reservas/reservas.component';
import { ReservasService } from '../controllers/reservas/reservas.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'business',
    component: EmpresasComponent,
    resolve: {
      data: EmpresaService
    }
  },
  {
    path: 'reservas',
    component: ReservasComponent,
    resolve: {
      data: ReservasService
    }
  },
    { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
