import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNGComponent } from './prime-ng.component';
import { DatatablesComponent } from './datatables/datatables.component';

const routes: Routes = [
  {
    path:"", component: PrimeNGComponent,
    children: [
      {
        path:'datatables', component: DatatablesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeNGRoutingModule { }
