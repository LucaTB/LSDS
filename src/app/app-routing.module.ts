import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/pages/home/home.component';
import { FechasComponent } from 'src/app/components/pages/fechas/fechas.component';
import { BandsComponent } from 'src/app/components/pages/bands/bands.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'fechas',
    component: FechasComponent,
  },
  {
    path: 'bands',
    component: BandsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
