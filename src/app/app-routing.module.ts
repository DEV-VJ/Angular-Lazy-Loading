import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'primeng', loadChildren: () => import('./prime-ng/prime-ng.module').then(m => m.PrimeNGModule)
  },
  {
    path: 'swimlane', loadChildren: () => import('./swimlane/swimlane.module').then(m => m.SwimlaneModule)
  },
  {
    path:'', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
