import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwimlaneComponent } from './swimlane.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  {
    path: '', component: SwimlaneComponent,
    children: [
      {
        path: 'datatable', component: DatatableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwimlaneRoutingModule { }
